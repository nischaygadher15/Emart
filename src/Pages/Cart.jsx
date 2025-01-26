import React from "react";
import { Button, TextInput } from "flowbite-react";
import proImg from "../assets/Products Images_2/img-1.png";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  return (
    <div className="px-4 sm:px-11 w-full sm:min-w-[640px] md:min-w-[798px] lg:min-w-[1024px]">
      <p className="text-4xl lg:text-5xl font-medium text-center my-5 md:my-12">
        Your Cart (4 items)
      </p>

      {/* Product List Table */}
      <div className="w-full">
        <div className="py-3 flex justify-start items-center gap-2 font-medium border-b-2 md:border-t-2 border-gray-300">
          <p className="w-[10%] text-center">No.</p>
          <p className="w-[50%] text-left">Item</p>
          <p className="hidden md:block w-[20%] text-center">Quantity</p>
          <p className="hidden md:block w-[20%] text-right">Price</p>
        </div>
        <div className="product-list">
          {/* Row */}
          <div className="flex items-center border-b-2 border-gray-300 gap-2 py-3">
            {/* No */}
            <div className="w-[10%]">
              <p className="text-center">1</p>
            </div>
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-5">
              {/* Product Image & Detail */}
              <div className="w-full md:w-[55%] ">
                <div className="flex items-center gap-3">
                  <img src={proImg} alt="Product Image" className="w-24 h-24" />
                  <div className="flex flex-1 flex-col justify-start">
                    <p className="font-medium text-xl">Product Name</p>
                    <p>Brand name</p>
                  </div>
                </div>
              </div>

              {/* Product Quantity */}
              <div className="w-full md:w-[20%] flex flex-col items-end md:items-center gap-1">
                <div className="flex justify-center gap-1">
                  <Button size="sm">-</Button>
                  <TextInput
                    type="text"
                    defaultValue="1"
                    className="rounded-none w-14 text-center"
                  />
                  <Button size="sm">+</Button>
                </div>
                {false && (
                  <small className="text-red-600 text-center">
                    Quantity must be number!
                  </small>
                )}
              </div>

              {/* Product Price */}
              <div className="w-full md:w-[20%] flex justify-end items-center gap-3">
                <p className="font-medium">&#8377;500.00</p>
                <button className="bg-red-600 hover:bg-red-700 text-xl text-white p-1 rounded-full">
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Total Price Table */}
      <div className="w-full flex justify-end my-11">
        <table className="w-full sm:w-1/2">
          <tbody>
            <tr className="border-b-2 border-t-2 border-gray-300">
              <td className="flex justify-between py-2">
                <p className="font-medium">Subtotal:</p>
                <p>&#8377;1020.00</p>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-300">
              <td className="flex justify-between py-2">
                <p className="font-medium">Sales Tax:</p>
                <p>&#8377;102.00</p>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-300">
              <td className="flex items-center justify-between py-2">
                <p className="font-medium">Coupon Code:</p>
                <TextInput placeholder="Enter coupon code" />
              </td>
            </tr>
            <tr className="border-b-2 border-gray-300">
              <td className="flex justify-between py-3 text-xl">
                <p className="font-medium">Grand Total:</p>
                <p className="font-medium">&#8377;1121.98</p>
              </td>
            </tr>
            <tr>
              <td className="py-2 text-right">
                <button className="w-full sm:w-40 bg-black text-white p-3 mt-3">
                  Check Out
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
