using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vehicle.DataLayer;
using Vehicle.Models;

namespace Vehicle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public readonly DBVehicleContext _dbcontext;

        public UserController(DBVehicleContext dbcontext)
        {
            _dbcontext = dbcontext;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> getAllUser()
        {
            if(_dbcontext.Users == null)
            {
                return NotFound();
            }
            return await _dbcontext.Users.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<User>> getUserById(int id)
        {
            if(_dbcontext.Users == null)
            {
                return NotFound();
            }
            var user = await _dbcontext.Users.FindAsync(id);
            if(user == null)
            {
                return NotFound();
            }
            return user;
        }


        [HttpPost]
        public async Task<ActionResult<User>> postUser(User user)
        {
            _dbcontext.Users.Add(user);
            await _dbcontext.SaveChangesAsync();
            return Ok("User added successfully.");
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> putUser(int id, User user)
        {
            if(id != user.userId)
            {
                return BadRequest();
            }

            _dbcontext.Entry(user).State = EntityState.Modified;

            try
            {
                await _dbcontext.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok("User updated successfully.");
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> deleteUser(int id)
        {
            if(_dbcontext.Users == null)
            {
                return NotFound();
            }
            var user = await _dbcontext.Users.FindAsync(id);

            if(user == null)
            {
                return NotFound();
            }
            _dbcontext.Users.Remove(user);
            await _dbcontext.SaveChangesAsync();
            return Ok("User deleted successfully.");
        }
    }
}



















