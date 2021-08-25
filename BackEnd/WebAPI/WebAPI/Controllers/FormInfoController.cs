using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormInfoController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        
        public FormInfoController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from dbo.Formulario";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FormInfoAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(FormInfo fi)
        {
            string query = @"insert into dbo.Formulario values 
            ('"+fi.nomeCompleto+@"', '"+fi.email+@"', '"+fi.cpf+@"', '"+fi.rendaPrincipal+@"','"+fi.dataNascimento+@"', '"+fi.celular+@"', '"+fi.profissao+@"')
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FormInfoAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successufully");
        }

        [HttpPut]
        public JsonResult Put(FormInfo fi)
        {
            string query = @"update dbo.Formulario set 
            FormularioNomeCompleto = '"+fi.nomeCompleto+ @"'
            FormularioNomeCompleto = '" + fi.nomeCompleto + @"'
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FormInfoAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successufully");
        }

        [HttpDelete("{cpf}")]
        public JsonResult Delete(String cpf)
        {
            string query = @"delete from dbo.Formulario where 
            FormularioCPF = '" + cpf + @"'
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FormInfoAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successufully");
        }
    }
}
