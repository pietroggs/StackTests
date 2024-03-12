namespace API.Models
{
    public class Ativo
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public string Local { get; set; }
        public string Tipo { get; set; }
        public int Valor { get; set; }
    }
}
