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
import { useSelector } from "react-redux";
import { useDebounce } from "../hooks/useDebounce";
const Search = () => {
  const navigate = useNavigate()
  const { categoryId } = useParams();

  const searchProduct = useSelector((state) => state?.search?.search) // search
  const searchDebounce = useDebounce(searchProduct, 100) // hook delay nhận value search
  const [isLoadingSearch, setIsLoadingSearch] = useState(false) // set loading khi search
  const [limit, setLimit] = useState(3);
  const [typeProducts, setTypeProducts] = useState([])

  const fetchProductAll = async (context) => {
    const limit = context.queryKey && context.queryKey[1]
    const search = context.queryKey && context.queryKey[2]
    const res = await ProductService.getAllProduct(search,limit);

    return res //return để query nhận được data all khi đi product sẽ nhận được và thay đổi để set lại state
  };

  const fetchPetAll = async (context) => {
    const limit = context.queryKey && context.queryKey[1]
    const search = context.queryKey && context.queryKey[2]
    const res = await PetsService.getAllPets(search,limit);

    return res //return để query nhận được data all khi đi product sẽ nhận được và thay đổi để set lại state
  };

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res.status === 'OK') {
      setTypeProducts(res?.data) 
    }
  }

  const handleClickCategory = (id, sect) => {
    navigate(`/${sect}/${id}`)
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
  const queryPetByCategory = useQuery({ queryKey: ['petCategory', categoryId], queryFn: getAllPetByCategory })

  const { isLoading: isLoadingCategory, data: categorys } = queryCategory
  const { isLoading: isLoadingPetCategory, data: petCategorys } = queryPetByCategory
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { isLoading, data: products, isPreviousData } = useQuery(
    ["products", limit,searchDebounce],
    fetchProductAll,
    { retry: 3, retryDelay: 1000, keepPreviousData: true }
  );

  const { isLoading: isLoadingPet, data: pets, isPreviousData: isPreviousDataPet } = useQuery(
    ["pets", limit,searchDebounce],
    fetchPetAll,
    { retry: 3, retryDelay: 1000, keepPreviousData: true }
  );


  useEffect(() => {
    fetchAllTypeProduct()
  }, [])
  return (
    <div></div>
  );
};

export default Search;
