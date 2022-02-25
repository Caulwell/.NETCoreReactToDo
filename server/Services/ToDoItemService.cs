using server.Models;

namespace server.Services;

public static class ToDoItemService
{
    static List<ToDoItem> ToDoItems { get; }
    static int nextId = 3;
    static ToDoItemService()
    {
        ToDoItems = new List<ToDoItem>
        {
            new ToDoItem { Id = 1, Name = "Classic Italian", Time = 2 },
            new ToDoItem { Id = 2, Name = "Veggie", Time = 3 }
        };
    }

    public static List<ToDoItem> GetAll() => ToDoItems;

    public static ToDoItem? Get(int id) => ToDoItems.FirstOrDefault(p => p.Id == id);

    public static void Add(ToDoItem toDoItem)
    {
        toDoItem.Id = nextId++;
        ToDoItems.Add(toDoItem);
    }

    public static void Delete(int id)
    {
        var toDoItem = Get(id);
        if(toDoItem is null)
            return;

        ToDoItems.Remove(toDoItem);
    }

    public static void Update(ToDoItem toDoItem)
    {
        var index = ToDoItems.FindIndex(p => p.Id == toDoItem.Id);
        if(index == -1)
            return;

        ToDoItems[index] = toDoItem;
    }
}