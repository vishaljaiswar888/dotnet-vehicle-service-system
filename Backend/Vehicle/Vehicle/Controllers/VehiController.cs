using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vehicle.DataLayer;
using Vehicle.Models;
using System.Linq;
using System.Collections.Generic;


namespace Vehicle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiController : ControllerBase
    {
        public readonly DBVehicleContext _dbcontext;

        public VehiController(DBVehicleContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vehi>>> getAllVehi()
        {
            if(_dbcontext.Vehis == null)
            {
                return NotFound();
            }
            return await _dbcontext.Vehis.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Vehi>> getVehiById(int id)
        {
            if(_dbcontext.Vehis == null)
            {
                return NotFound();
            }
            var vehicle = await _dbcontext.Vehis.FindAsync(id);
            if(vehicle == null)
            {
                return NotFound();
            }
            return vehicle;
        }


        /*[HttpGet("{custEmail}")]
        public async Task<ActionResult<IEnumerable<Vehi>>> GetVehiByCustEmail(string custEmail)
        {
            var vehicles = await _dbcontext.Vehis.Where(v => v.custEmail == custEmail).ToListAsync();
            if (vehicles == null || vehicles.Count == 0)
            {
                return NotFound();
            }
            return vehicles;
        }


        [HttpGet("email/{custEmail}")]
        public async Task<ActionResult<IEnumerable<Vehi>>> GetVehiByCustEmail(string custEmail)
        {
            var vehicles = await _dbcontext.Vehis.Where(v => v.custEmail == custEmail).ToListAsync();
            if (vehicles == null || vehicles.Count == 0)
            {
                return NotFound();
            }
            return vehicles;
        }

        [HttpGet("id/{id}")]
        public async Task<ActionResult<Vehi>> GetVehiById(int id)
        {
            var vehicle = await _dbcontext.Vehis.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }
            return vehicle;
        }*/



        [HttpPost]
        public async Task<ActionResult<Vehi>> postVehicle(Vehi vehicle)
        {
            _dbcontext.Vehis.Add(vehicle);
            await _dbcontext.SaveChangesAsync();
            return Ok("Vehicle  added successfully!");
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> putVehicle(int id, Vehi vehicle)
        {
            if(id != vehicle.Id)
            {
                return BadRequest();
            }
            _dbcontext.Entry(vehicle).State = EntityState.Modified;

            try
            {
                await _dbcontext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok("Vehicle updated successfully.");
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> deleteBrand(int id)
        {
            if(_dbcontext.Vehis == null)
            {
                return NotFound();
            }

            var vehicle = await _dbcontext.Vehis.FindAsync(id);

            if (vehicle == null)
            {
                return NotFound();
            }

            _dbcontext.Vehis.Remove(vehicle);
            await _dbcontext.SaveChangesAsync();

            return Ok("Vehicle deleted successfully.");
        }
    }
}
