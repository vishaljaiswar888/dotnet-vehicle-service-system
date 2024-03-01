using System.ComponentModel.DataAnnotations;

namespace Vehicle.Models
{
    public class User
    {
        [Key]
        public int userId { get;set; }
        [Required]
        public string userFullName { get; set; }
        [Required]
        public string userEmail { get; set; }
        [Required]
        public string userDOB { get; set; }
        [Required]
        public string userPassword { get; set; }
        [Required]
        public string userCPassword { get; set; }
        public string userRole { get; set; } = "Customer";
    }
}
