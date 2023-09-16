import { InputNumber } from "antd";
import React from "react";

const Orders = () => {
  const onChange = (value) => {
    console.log('changed', value);
  };
  return (
    <div className="mb-10">
      <div className="relative">
        <img className="w-full" src="./images/image-card.png" alt="" />
        <div className="absolute left-[50%] top-[50%] -translate-x-6 -translate-y-6 text-white">
          <h3 className="text-2xl font-semibold">CART</h3>
          <p>Home - Cart</p>
        </div>
      </div>
      <div className="container">
        <div className="relative overflow-x-auto mt-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-lg font-semibold border-b">
                <th scope="col" className="px-6 py-3">
                  Item
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="flex items-center gap-3 px-6 py-4 font-semibold text-lg text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img className="w-[100px] h-[100px] object-contain" src="./images/Logo.png" alt="" />
                  <p>Eatmeet food</p>
                </th>
                <td className="px-6 py-4">$10.99</td>
                <td className="px-6 py-4">
                  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                </td>
                <td className="px-6 py-4">$10.99</td>
                <td className="px-6 py-4 text-center cursor-pointer">X</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="flex items-center gap-3 px-6 py-4 font-semibold text-lg text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img className="w-[100px] h-[100px] object-contain" src="./images/Logo.png" alt="" />
                  <p>Eatmeet food</p>
                </th>
                <td className="px-6 py-4">$10.99</td>
                <td className="px-6 py-4">
                  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                </td>
                <td className="px-6 py-4">$10.99</td>
                <td className="px-6 py-4 text-center cursor-pointer">X</td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className="flex items-start mt-10">
          <div className="flex flex-1 items-center gap-4">
            <input className="bg-[#faf6f1] w-[300px] p-3 rounded-lg" placeholder="Enter coupon code" />
            <button className="bg-[#ffbc3e] px-9 py-[14px] rounded-full font-medium text-white">Apply coupon</button>
          </div>
          <div className="flex-1 flex flex-col justify-end items-end">
            <div className="w-[200px] flex justify-between items-center">
              <h5 className="font-bold text-lg">Subtotal</h5>
              <p className="text-gray-500 font-semibold">$20.98</p>
            </div>
            <div className="w-[200px] flex justify-between items-center">
              <h5 className="font-bold text-lg">Shipping Cost</h5>
              <p className="text-gray-500 font-semibold">$0.00</p>
            </div>
            <div className="w-[200px] flex justify-between items-center">
              <h5 className="font-bold text-lg">Total</h5>
              <p className="text-red-500 font-semibold">$20.98</p>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <button className="bg-[#222222] px-9 py-[14px] rounded-full font-medium text-white">Update</button>
              <button className="bg-[#ff642f] px-9 py-[14px] rounded-full font-medium text-white">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
