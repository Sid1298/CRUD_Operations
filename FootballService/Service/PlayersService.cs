using System.Collections.Generic;
using System.Threading.Tasks;
using FootballService.Models;
using Microsoft.EntityFrameworkCore;

namespace FootballService.Service
{
    public class PlayersService : IPlayersService
    {
        FootballDbContext context;
        public PlayersService(FootballDbContext context)
        {
            this.context = context;
        }
        public async Task<Player> CreatePlayer(Player player)
        {
            context.Players.Add(player);
            await context.SaveChangesAsync();
            return player;
        }

        public async Task DeletePlayer(Player player)
        {
            context.Players.Remove(player);
            await context.SaveChangesAsync();
        }

        public async Task<Player> GetPlayerById(int id)
        {
            return await context.Players
                .Include(p => p.Position)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Player>> GetPlayerList()
        {
            return await context.Players
                .Include(p => p.Position)
                .ToListAsync();
        }

        public async Task UpdatePlayer(Player player)
        {
            context.Players.Update(player);
            await context.SaveChangesAsync();
        }
    }
}