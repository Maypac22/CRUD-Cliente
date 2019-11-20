using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

//Model
namespace TesteRiosoft.Models
{
    public class Cliente
    {  
        //id primary key do database
        [Key]
        public int  Id { get; set; }

        [Required]
        public string Nome { get; set; }

        public string Email { get; set; }

        public string Telefone { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DataNasc { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? DataCadastro { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? DataAlteracao { get; set; }


    }
}