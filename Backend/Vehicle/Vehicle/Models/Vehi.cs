using System.ComponentModel.DataAnnotations;

namespace Vehicle.Models
{
    public class Vehi
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string ? custName { get; set; }
        [Required]
        public string? custEmail { get; set; }
        [Required]
        public string ? custPhone { get; set; }
        [Required]
        public string ? vehicleType { get; set; }
        [Required]
        public string ? vehicleBrand { get; set; }
        [Required]
        public string ? vehicleYear { get; set; }
        [Required]
        public string? vehicleNo { get; set; }
        [Required]
        public string ? custCity { get; set; }
        [Required]
        public string ? bookDate { get; set; }
        [Required]
        public string? vehicleStatus { get; set; } = "Pending";
    }
}
