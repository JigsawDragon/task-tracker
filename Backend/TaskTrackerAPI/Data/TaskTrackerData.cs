using Microsoft.EntityFrameworkCore;
using TaskTrackerAPI.Models;

namespace TaskTrackerAPI.Data
{
    public class TaskTrackerData : DbContext
    {
        public TaskTrackerData(DbContextOptions<TaskTrackerData> options) : base(options)
        {
        }

        public DbSet<TaskItem> Tasks { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TaskItem>().HasData(
                new TaskItem
                {
                    Id = 1,
                    Title = "Test Task",
                    Description = "This is a test.",
                    DueDate = DateTime.Now,
                    IsCompleted = false
                }
                );
        }
    }
}
