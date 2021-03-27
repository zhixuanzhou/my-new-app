using System;
using System.Collections.Generic;

namespace my_new_app.Requests
{
    public class CreateToDoListItemsRequest
    {
        public long Id { get; set; }
        public List<string> Items { get; set; } = new List<string>();
    }
}