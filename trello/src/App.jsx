import React from "react";
import { plusIcon, trashIcon } from "./assets/Icon/icon";

export default function App() {
  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto flex gap-4">
        {/* Collumn */}
        <div className="flex gap-4">
          <div className="bg-white w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
            <div
              role="button"
              className=" bg-gray-300 text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold flex items-center justify-between "
            >
              <div className="flex gap-2">
                <div className=" flex justify-center items-center px-2 py-1 text-sm rounded-full ">
                  0
                </div>
                Todo
              </div>
              <button className=" stroke-gray-500 hover:stroke-teal w-[40px] hover:bg-white rounded-full px-1 py-2 flex items-center justify-center ">
                {trashIcon}
              </button>
            </div>
            <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
              <div className="bg-gray-200 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-teal-500 cursor-grab relative">
                <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words">
                  todo
                </p>
              </div>
              <div className="bg-gray-200 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-teal-500 cursor-grab relative">
                <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words">
                  todo
                </p>
              </div>
              <div className="bg-gray-200 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-teal-500 cursor-grab relative">
                <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words">
                  todo
                </p>
              </div>
              <div className="bg-gray-200 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-teal-500 cursor-grab relative">
                <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words">
                  todo
                </p>
              </div>
            </div>
            <button className="h-[60px] w-[350px] min-w-[350px] bg-white p-4 ring-teal-600 hover:bg-gray-200 flex gap-2">
              {plusIcon}
              Add Task
            </button>
          </div>
        </div>
        {/* Add Column Btn */}
        <button className="h-[60px] w-[350px] min-w-[350px] rounded-lg bg-[#99999940] p-4 ring-teal-600 hover:ring-2 flex gap-2">
          {plusIcon}
          Add Column
        </button>
      </div>
    </div>
  );
}
