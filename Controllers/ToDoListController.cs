using System.Threading.Tasks;
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

        public async Task<IHttpActionResult> CreateToDoListItems(CreateToDoListItemsRequest request)
        {
            await toDoListService.CreateToDoListItems(request);
            return Ok();
        }
    }
}
