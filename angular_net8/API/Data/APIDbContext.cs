using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class APIDbContext : DbContext
    {
        public APIDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Ativo> Ativos { get; set; }
    }
}
