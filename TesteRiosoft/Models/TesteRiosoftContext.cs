using System.Data.Entity;
using System.Web.Configuration;


namespace TesteRiosoft.Models
{
    public class TesteRiosoftContext : DbContext
    {
        public TesteRiosoftContext() : base(WebConfigurationManager.ConnectionStrings["CrudRiosoft"].ConnectionString)
        {
                    
        }
        public DbSet<Cliente> Clientes { get; set; }
    }
}