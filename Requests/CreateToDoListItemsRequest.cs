using System.Collections.Generic;
using my_new_app.Domains;

namespace my_new_app.Requests
{
    public class CreateToDoListItemsRequest
    {
        public long Id { get; set; }
        public List<ToDoListItem> Items { get; set; }
    }
}