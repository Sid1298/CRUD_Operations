using System.Collections.Generic;
using System.Threading.Tasks;
using FootballService.Models;

namespace FootballService.Service
{
    public interface IPositionService
    {
        Task<IEnumerable<Position>> GetPositionList();
    }
}