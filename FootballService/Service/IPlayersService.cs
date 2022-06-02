using System.Collections.Generic;
using System.Threading.Tasks;
using FootballService.Models;

namespace FootballService.Service
{
    public interface IPlayersService
    {
        Task<IEnumerable<Player>> GetPlayerList();
        Task<Player> GetPlayerById(int id);
        Task<Player> CreatePlayer(Player player);
        Task UpdatePlayer(Player player);
        Task DeletePlayer(Player player);
    }
}