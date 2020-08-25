using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using DeveloperTest.Enums;

namespace DeveloperTest.Database.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }
        [MinLength(5)]
        public string Name { get; set; }
        public CustomerType Type { get; set; }
        public virtual List<Job> Jobs { get; set; }
    }
}
