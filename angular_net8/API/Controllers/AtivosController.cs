using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtivosController : Controller
    {
        private readonly APIDbContext _apiDbContext;

        public AtivosController(APIDbContext apiDbContext)
        {
            this._apiDbContext = apiDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAtivos()
        {
            var ativos = await _apiDbContext.Ativos.ToListAsync();
            return Ok(ativos);
        }

        [HttpPost]
        public async Task<IActionResult> AddAtivo([FromBody] Ativo ativoRequest)
        {
            ativoRequest.Id = Guid.NewGuid();
            await _apiDbContext.Ativos.AddAsync(ativoRequest);
            await _apiDbContext.SaveChangesAsync();

            return Ok(ativoRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetAtivo([FromRoute] Guid id)
        {
            var ativo = await _apiDbContext.Ativos.FirstOrDefaultAsync(x => x.Id == id);
            if (ativo == null)  
                return NotFound();
            
            return Ok(ativo);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateAtivo([FromRoute] Guid id, [FromBody] Ativo ativoRequest)
        {
            var ativo = await _apiDbContext.Ativos.FindAsync(id);
            if(ativo == null)
                return NotFound();

            ativo.Id = ativoRequest.Id;
            ativo.Nome = ativoRequest.Nome;
            ativo.Local = ativoRequest.Local;
            ativo.Tipo = ativoRequest.Tipo;
            ativo.Valor = ativoRequest.Valor;

            await _apiDbContext.SaveChangesAsync();

            return Ok(ativo);
        }

        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> DeleteAtivo([FromRoute] Guid id)
        {
            var ativo = await _apiDbContext.Ativos.FindAsync(id);
            if (ativo == null)
                return NotFound();
            _apiDbContext.Ativos.Remove(ativo);
            await _apiDbContext.SaveChangesAsync();
            return Ok(ativo);
        }
    }
}
