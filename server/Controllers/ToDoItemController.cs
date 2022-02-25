using server.Models;
using server.Services;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ToDoItemController : ControllerBase
{
    public ToDoItemController()
    {
    }



    // GET All
    [HttpGet]
    public ActionResult<List<ToDoItem>> GetAll()
    {
        return ToDoItemService.GetAll();
    
    }   
    // ADD A TODO ITEM
    [HttpPost]
    public IActionResult Create(ToDoItem toDoItem)
    {            
        ToDoItemService.Add(toDoItem);
        return Ok(toDoItem);
    }

    // PUT action

    // DELETE action
}