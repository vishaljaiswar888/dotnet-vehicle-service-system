using Microsoft.EntityFrameworkCore;
using Vehicle.Models;

namespace Vehicle.DataLayer
{
    public class DBVehicleContext : DbContext
    {
        public DBVehicleContext(DbContextOptions<DBVehicleContext> options) : base(options)
        {

        }
        public DbSet<Vehi> Vehis {  get; set; } 
        public DbSet<User> Users { get; set; }  
        public DbSet<Contact> Contacts { get; set; }
    }
}
