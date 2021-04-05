using Microsoft.AspNetCore.Mvc;
using my_new_app.Requests;
using my_new_app.Services;

namespace my_new_app.Controllers
{
    [ApiController]
    public class ToDoListController : ControllerBase
    {
        readonly ToDoListService toDoListService;
        public ToDoListController(ToDoListService toDoListService)
        {
            this.toDoListService = toDoListService;
        }

        [HttpPost]
        [Route("http://localhost:3000/items")]
        public void CreateToDoListItems(CreateToDoListItemsRequest request)
        {
            toDoListService.Create(request);
        }
    }
}