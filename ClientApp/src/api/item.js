import axios from "axios";

const ItemApi = {
  createItem: async (data) => {
    // console.log(data);
    const response = await axios.post("http://localhost:3000/items", data);
    return response;
  },
};

export default ItemApi;
