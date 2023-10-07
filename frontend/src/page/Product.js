import React, { useState } from "react";
import Banner from "../components/Banner";
import { Rate, Select, Slider } from "antd";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineRight,AiOutlineHeart,AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import * as CategoryService from "../services/CategoryService"
import * as PetsService from "../services/PetsService"
import { useParams } from 'react-router-dom';
const Product = () => {
  const navigate = useNavigate()
  const { categoryId } = useParams();
  const handleClickCategory = (id) => {
    navigate(`/product/${id}`)
  }
  const getAllCategory = async () => {
    const res = await CategoryService.getAllCategory()
    return res
  }
  const getAllPetByCategory = async (context) => {
    const id = context.queryKey && context.queryKey[1]
    const res = await PetsService.getPetByCategory(id)
    return res
  }

  const queryCategory = useQuery({ queryKey: ['category'], queryFn: getAllCategory })
  const queryPetByCategory = useQuery({ queryKey: ['petCategort', categoryId], queryFn: getAllPetByCategory })
  const { isLoading: isLoadingCategory, data: categorys } = queryCategory
  const { isLoading: isLoadingPetCategory, data: petCategorys } = queryPetByCategory
  console.log('petCategorys',petCategorys);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="pb-10 bg-white">
      <Banner title="Products" link="home / product" />
      <div className="container pt-5">
        <div className="w-full flex gap-5">
          <div className="flex-1">
            <div className="bg-[#ffbc3e] px-5 py-4 text-white rounded-lg text-[16px] ">
              <input
                className="text-white placeholder:text-white "
                placeholder="Search here"
              />
            </div>
            <div className="mt-5 border-2 p-4 rounded-lg">
              <p className="text-lg font-semibold">Price</p>
              <div className="mt-5">
                <input
                  id="minmax-range"
                  type="range"
                  min="0"
                  max="10"
                  value="5"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <p className="text-gray-500 font-medium">$50 - $500</p>
                <button className="bg-[#ff642f] px-9 py-[14px] rounded-full text-[12px] font-medium text-white">
                  FILTER
                </button>
              </div>
            </div>
            <div className="mt-5 border-2 p-4 rounded-lg">
              <p className="text-lg font-semibold">Categories</p>
              <div className="mt-5 flex flex-col gap-5 text-[15px] font-medium">
                {
                  categorys?.map((category) => (
                    <div className={`flex items-center justify-between cursor-pointer ${categoryId === category?._id ? 'text-gray-800':'text-gray-500'} `} key={category._id} onClick={() => handleClickCategory(category?._id)}>
                      {category.name} <AiOutlineRight size={18} className={`${categoryId === category?._id ? 'text-red-600':'text-gray-500'}`} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="flex-4">
            <div className="flex  items-center justify-between">
              <p className="text-gray-500 font-medium">Showing 1-9 of 12 results</p>
              <Select
                defaultValue="Sort by Popular"
                style={{
                  width: 200,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Sort by Popular",
                    label: "Sort by Popular",
                  },
                  {
                    value: "Sort by 2",
                    label: "Sort by 2",
                  },
                  {
                    value: "Sort by 1",
                    label: "Sort by 1",
                  },
                ]}
              />
            </div>
            <div className="mt-5">
                <Link to="/productDetails" className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                      petCategorys?.map((pets) => (
                        <div className=" cursor-pointer group relative h-[380px] w-[300px] " key={pets?._id}>
                            <div className="transition-all duration-300 ease-in-out w-full h-[79%] bg-[#FAF7F2] rounded-lg p-3 absolute top-0 left-0 group-hover:top-[-15px] ">
                                <img className="rounded-lg w-full h-full" src={`${pets.image ? pets.image : '../images/dogvang.jpg'}`} alt="" />
                            </div>
                            <div className="transition duration-300 ease-in-out absolute right-5 top-1 bg-[#ff642f] text-white p-3 rounded-full opacity-0 group-hover:opacity-100"><AiOutlineHeart size={22}/></div>
                            <div  className="transition duration-300 ease-in-out absolute right-5 top-[60px] bg-[#0090AE] text-white p-3 rounded-full opacity-0 group-hover:opacity-100"><AiOutlineEye size={22} /></div>
                            <button className="transition duration-300 ease-in-out bg-black px-11 py-[14px] rounded-full text-[12px] font-medium text-white absolute top-[265px] z-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">Add to cart</button>
                            <div className="flex flex-col items-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
                                <Rate disabled defaultValue={2} />
                                <p className="text-lg font-medium">{pets.name}</p>
                                <p className="text-red-700 font-medium">$25.00</p>
                            </div>
                        </div>
                      ))
                    }
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
