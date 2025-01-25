import React from "react";
import { Button, TextInput } from "flowbite-react";
import proImg from "../assets/Products Images_2/img-1.png";
import { FaMinus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  return (
    <div className="px-4 sm:px-11 w-full sm:min-w-[640px] md:min-w-[798px] lg:min-w-[1024px]">
      <p className="text-5xl font-medium mb-7">Your Cart (4 items)</p>
      <table className="w-full">
        <thead>
          <tr className="h-12 border-b-2 border-gray-300">
            <th className="w-[5%]">No.</th>
            <th className="w-[50%] text-left">Item</th>
            <th className="w-[15%] text-left">Price</th>
            <th className="w-[15%] text-center">Quantity</th>
            <th className="w-[15%] text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 border-gray-300">
            <td className="text-center">1</td>
            <td className="flex items-center gap-3">
              <img src={proImg} alt="Product Image" className="w-24 h-24" />
              <div className="flex flex-col justify-start">
                <p className="font-medium text-xl">Product Name</p>
                <p>Brand name</p>
              </div>
            </td>
            <td>
              <p className="font-medium text-left">&#8377;500</p>
            </td>
            <td>
              <div className="flex justify-center gap-1">
                <Button size="sm">-</Button>
                <TextInput defaultValue="1" className="rounded-none w-14" />
                <Button size="sm">+</Button>
              </div>
            </td>
            <td>
              <div className="flex justify-end items-center gap-3">
                <p className="font-medium">&#8377;500</p>
                <button className="bg-red-600 hover:bg-red-700 text-white p-1 rounded-full">
                  <IoMdClose />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="w-full flex justify-end">
        <table className="w-1/2 mt-5">
          <tbody>
            <tr className="border-b-2 border-gray-300">
              <td className="flex justify-between py-2">
                <p>Subtotal:</p>
                <p>&#8377;1020.00</p>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-300">
              <td className="flex justify-between py-2">
                <p>Sales Tax:</p>
                <p>&#8377;102.00</p>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-300">
              <td className="flex items-center justify-between py-2">
                <p>Coupon Code:</p>
                <TextInput placeholder="Enter coupon code" />
              </td>
            </tr>
            <tr className="border-b-2 border-gray-300">
              <td className="flex justify-between py-2">
                <p>Grand Total:</p>
                <p>&#8377;1121.98</p>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <button className="w-40 bg-black text-white p-3 mt-3">
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
