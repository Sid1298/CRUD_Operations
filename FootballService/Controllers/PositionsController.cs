using System.Collections.Generic;
using System.Threading.Tasks;
using FootballService.Models;
using FootballService.Service;
using Microsoft.AspNetCore.Mvc;

namespace FootballService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PositionsController : ControllerBase
    {
        IPositionService positionsService;
        public PositionsController(IPositionService positionService)
        {
            this.positionsService = positionService;
        }

        // GET: api/Positions
        [HttpGet]
        public async Task<IEnumerable<Position>> Get()
        {
            return await positionsService.GetPositionList();
        }
    }
}