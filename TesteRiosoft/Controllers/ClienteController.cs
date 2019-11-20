using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TesteRiosoft.Models;

namespace TesteRiosoft.Controllers
{
    public class ClienteController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Cliente> Get()
        {
            //Retorna - Busca a Lista de todos os Clientes Cadastrados
            return new TesteRiosoftContext().Clientes.ToList();
        }

        // GET api/<controller>/5
        public Cliente Get(int id)
        {
            return new TesteRiosoftContext().Clientes.Find(id);
        }

        // POST api/<controller> - Adiciona Novos Clientes - Cadastro
        public Cliente Post([FromBody]Cliente model)
        {
            model.DataCadastro = DateTime.Now;
            var ctx = new TesteRiosoftContext();
            ctx.Clientes.Add(model);
            ctx.SaveChanges();
            return model;
        }

        // PUT api/<controller>/5v --  Update -- Atualização
        public void Put(int id, [FromBody]Cliente model)
        {
            var ctx = new TesteRiosoftContext();
            var cli = ctx.Clientes.Find(id);
            cli.Nome = model.Nome;
            cli.Email = model.Email;
            cli.DataAlteracao = DateTime.Now;
            cli.DataNasc = model.DataNasc;
            ctx.SaveChanges(); // salva as alterações 
        }

        // DELETE api/<controller>/5 - Removendo 
        public void Delete(int id)
        {
            var ctx = new TesteRiosoftContext();
            var cli = ctx.Clientes.Find(id);
            ctx.Clientes.Remove(cli);
            ctx.SaveChanges();
        }
    }
}