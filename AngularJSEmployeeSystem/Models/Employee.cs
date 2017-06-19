using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJSEmployeeSystem.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Department { get; set; }
        public DateTime JoinDate { get; set; }
        public int Age { get; set; }
        public decimal Salary { get; set; }
    }
}