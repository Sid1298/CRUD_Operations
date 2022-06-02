using System.Collections.Generic;
using System.Threading.Tasks;
using FootballService.Models;
using FootballService.Service;
using Microsoft.AspNetCore.Mvc;

namespace FootballService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]  // end-point becomes localhost:5000/api/controllername
    public class PlayersController : ControllerBase
    {
        IPlayersService playersService;
        public PlayersController(IPlayersService playersService)
        {
            this.playersService = playersService;
        }

        // GET: api/Players
        [HttpGet]
        public async Task<IEnumerable<Player>> Get()
        {
            return await playersService.GetPlayerList();
        }

        // GET: api/Players/{id}
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Get([FromRoute]int id)
        {
            var player = await playersService.GetPlayerById(id);
            if (player == null) return NotFound();
            return Ok(player);
        }

        // POST: api/Players
        [HttpPost]
        public async Task<ActionResult<Player>> Post([FromBody]Player player)
        {
            await playersService.CreatePlayer(player);
            return CreatedAtAction("Post", new { id = player.Id }, player);
        }

        // PUT: api/Players/{id}
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Put([FromRoute]int id, [FromBody]Player player)
        {
            if (id != player.Id) return BadRequest("Invalid Player ID");
            await playersService.UpdatePlayer(player);
            return NoContent();
        }

        // DELETE: api/Players/{id}
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute]int id)
        {
            if (id <= 0) return BadRequest("Invalid Player ID");
            var player = await playersService.GetPlayerById(id);
            if (player == null) return NotFound();
            await playersService.DeletePlayer(player);
            return NoContent();
        }
    }
}