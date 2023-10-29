import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Rate, Select, Slider } from "antd";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineRight,AiOutlineHeart,AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import * as CategoryService from "../services/CategoryService"
import * as PetsService from "../services/PetsService"
import * as ProductService from "../services/ProductService"
import { useParams } from 'react-router-dom';
import CardComponent from "../components/CardComponent/CardComponent";
import { useMutationHooks } from "../hooks/useMutationHook";
import * as UserService from "../services/UserService";
import { useSelector } from "react-redux";
const Pet = () => {
  const navigate = useNavigate()
  const [price, setPrice] = useState(0);
  const [Filterprice, setFilterPrice] = useState(0);
  const user = useSelector((state) => state?.user);
  const { categoryId } = useParams();
  const handleClickCategory = (id, sect) => {
    navigate(`/${sect}/${id}`)
  }
  const getAllCategory = async () => {
    const res = await CategoryService.getAllCategory()
    return res
  }
  const getAllPetByCategory = async (context) => {
    const id = context.queryKey && context.queryKey[1]
    const price = context.queryKey && context.queryKey[2];
    const res = await PetsService.getPetByCategory(id, price)
    return res
  }
  const mutationUpdate = useMutationHooks((data) => {
    const { id, token, ...rests } = data;
    return UserService.updateUser(id, token, { ...rests });
  });

  const {
    data: dataUpdate,
    isLoading: isLoadingUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdate,
  } = mutationUpdate;


  const queryCategory = useQuery({ queryKey: ['category'], queryFn: getAllCategory })
  const queryPetByCategory = useQuery({ queryKey: ['petCategory', categoryId, Filterprice], queryFn: getAllPetByCategory })

  const { isLoading: isLoadingCategory, data: categorys } = queryCategory
  const { isLoading: isLoadingPetCategory, data: petCategorys } = queryPetByCategory
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (checked) => {
    setPrice(checked);
  };

  const handleFilterPrice = () => {
    setFilterPrice(price);
  };


  useEffect(() => {
    mutationUpdate.mutate({
      id: user?._id,
      token: user?.access_token,
      heartProduct: user?.heartPet,
      ...user,
    });
  }, [user?.heartPet]);
  return (
    <div className="pb-10 bg-white">
      <Banner title="Pets" link="home / pet" />
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
                <Slider
                  min={0}
                  max={1000}
                  defaultValue={0}
                  onChange={onChange}
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <p className="text-gray-500 font-medium">$50 - $500</p>
                <button className="bg-[#ff642f] px-9 py-[14px] rounded-full text-[12px] font-medium text-white" onClick={handleFilterPrice}>
                  FILTER
                </button>
              </div>
            </div>
            <div className="mt-5 border-2 p-4 rounded-lg">
              <p className="text-lg font-semibold">Categories</p>
              <div className="mt-5 flex flex-col gap-5 text-[15px] font-medium">
                {
                  categorys?.map((category) => (
                    <div className={`flex items-center justify-between cursor-pointer ${categoryId === category?._id ? 'text-gray-800':'text-gray-500'} `} key={category._id} onClick={() => handleClickCategory(category?._id,category?.sect)}>
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
                    value: "Bubble Sort",
                    label: "Bubble Sort",
                  },
                  {
                    value: "Selection Sort",
                    label: "Selection Sort",
                  },
                ]}
              />
            </div>
            <div className="mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                      petCategorys?.data?.map((pets) => (
                        <CardComponent data={pets} isPet={true} />
                      ))
                    }
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pet;
