import axios from "axios";
import ItemApi from "./item";

jest.mock("axios");

describe("ItemApi", async () => {
  ItemApi("should create items", async () => {
    const items = {
      items: [
        {
          name: "the first item",
        },
      ],
    };

    axios.post.mockResolvedValue({ data: {} });

    await ItemApi.createItem(items);

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:3000/items",
      items
    );
  });
});
