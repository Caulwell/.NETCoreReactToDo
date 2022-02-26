using TodoApi.Models;
using Microsoft.EntityFrameworkCore;

namespace TodoApi.Data;

public class TodoItemsDB : DbContext
{
    public TodoItemsDB(DbContextOptions options) : base(options) { }
    public DbSet<TodoItem> TodoItems { get; set; }

}