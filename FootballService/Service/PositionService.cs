using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FootballService.Models;
using Microsoft.EntityFrameworkCore;

namespace FootballService.Service
{
    public class PositionService : IPositionService
    {
        FootballDbContext context;
        public PositionService(FootballDbContext context)
        {
            this.context = context;
        }
        public async Task<IEnumerable<Position>> GetPositionList()
        {
            return await context.Positions
                .OrderBy(p => p.Id)
                .ToListAsync();
        }
    }
}