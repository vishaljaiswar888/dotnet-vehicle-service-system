using System.ComponentModel.DataAnnotations;

namespace Vehicle.Models
{
    public class Contact
    {
        [Key]
        public int CId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Message { get; set; }
    }
}
