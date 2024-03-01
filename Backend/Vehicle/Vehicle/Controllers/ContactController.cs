using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vehicle.DataLayer;
using Vehicle.Migrations;
using Vehicle.Models;

namespace Vehicle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        public readonly DBVehicleContext _dbcontext;

        public ContactController(DBVehicleContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> getAllContact()
        {
            if (_dbcontext.Contacts == null)
            {
                return NotFound();
            }
            return await _dbcontext.Contacts.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> getContactById(int id)
        {
            if (_dbcontext.Contacts == null)
            {
                return NotFound();
            }
            var contact = await _dbcontext.Contacts.FindAsync(id);
            if (contact == null)
            {
                return NotFound();
            }
            return contact;
        }


        [HttpPost]
        public async Task<ActionResult<Contact>> postContact(Contact contact)
        {
            _dbcontext.Contacts.Add(contact);
            await _dbcontext.SaveChangesAsync();
            return Ok("Contact  added successfully!");
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> putContact(int id, Contact contact)
        {
            if (id != contact.CId)
            {
                return BadRequest();
            }
            _dbcontext.Entry(contact).State = EntityState.Modified;

            try
            {
                await _dbcontext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok("Contact updated successfully.");
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> deleteContact(int id)
        {
            if (_dbcontext.Contacts == null)
            {
                return NotFound();
            }

            var contact = await _dbcontext.Contacts.FindAsync(id);

            if (contact == null)
            {
                return NotFound();
            }

            _dbcontext.Contacts.Remove(contact);
            await _dbcontext.SaveChangesAsync();

            return Ok("Contact deleted successfully.");
        }

    }
}
