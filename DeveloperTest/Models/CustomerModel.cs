using System.Collections.Generic;

namespace DeveloperTest.Models
{
    public class CustomerModel : BaseCustomerModel
    {
        public int CustomerId { get; set; }
        public virtual List<JobModel> Jobs { get; set; }
    }
}
