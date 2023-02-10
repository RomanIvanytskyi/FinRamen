import { button } from "@material-tailwind/react";
import CategoryModal from "./CreateCategory";
import { useState, useEffect } from "react";
import { get, deleteCategory } from "../api/categoriesApi";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import "./createCategories.css"

export default function CustomTable() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleOpen = (open) => {
    setOpen(open);
  };

  const deleteItem = (_id) => {
    deleteCategory(_id).then((response) => {
      console.log(response);
      setData([...data.filter((item) => item._id !== response.data)]);
    });
  };

  const fetch = () => {
    get().then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg ">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Name
            </th>
            <th scope="col" class="py-3 px-6">
              Type
            </th>
            <th scope="col" class="py-3 px-6">
              <button onClick={() => handleOpen(open === false ? true : false)}>
                <FaPlus /> New
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <CategoryModal open={open} handleOpen={handleOpen} fetch={fetch} />
          {data.map((category) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {category.name}
                </th>
                <td class="py-4 px-6">{category.type}</td>
                <td class="py-4 px-6 text-right">
                  <button onClick={() => deleteItem(category._id)}>
                    <FaTrashAlt />
                  </button>
                  <CategoryModal
                    open={open}
                    handleOpen={handleOpen}
                    fetch={fetch}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
