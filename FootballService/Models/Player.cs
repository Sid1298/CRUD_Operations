#nullable disable

namespace FootballService.Models
{
    public partial class Player
    {
        public int Id { get; set; }
        public string ShirtNo { get; set; }
        public string Name { get; set; }
        public int? PositionId { get; set; }
        public int? Appearances { get; set; }
        public int? Goals { get; set; }

        public virtual Position Position { get; set; }
    }
}
