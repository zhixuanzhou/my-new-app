using System.Linq;
using my_new_app.Requests;


namespace my_new_app.Services
{
    public class ToDoListService
    {
        public ToDoListService()
        {
        }
        
        public void Create(CreateToDoListItemsRequest request)
        {
            var items = request.Items.ToList();
        }
    }
}