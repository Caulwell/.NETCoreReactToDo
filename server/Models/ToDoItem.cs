namespace server.Models;

public class ToDoItem
{
    public int Id { get; set; }

    public string? User { get; set; }
    public string? Name { get; set; }
    public int Time { get; set; }
}