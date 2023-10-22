import { Rate } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineHeart,AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addHeart } from "../../redux/slides/userSlice";
const CardComponent = ({data}) => {
    const [heart, setHeart] = useState(false)
    const dispatch = useDispatch();
    const handleHeart = (e) => {
        e.stopPropagation();
        dispatch(addHeart(data?._id))
    }
  return (
    <Link
      to={`/productDetails/${data?._id}`}
      className=" cursor-pointer group relative h-[380px] w-[300px] "
      key={data?._id}
    >
      <div className="transition-all duration-300 ease-in-out w-full h-[79%] bg-[#FAF7F2] rounded-lg p-3 absolute top-0 left-0 group-hover:top-[-15px] ">
        <img
          className="rounded-lg w-full h-full"
          src={`${data?.image ? data?.image : "../images/dogvang.jpg"}`}
          alt=""
        />
      </div>
      <div className="transition duration-300 ease-in-out absolute right-5 top-1 bg-[#ff642f] text-white p-3 rounded-full opacity-0 group-hover:opacity-100" onClick={handleHeart}>
        <AiOutlineHeart size={22} />
      </div>
      <div className="transition duration-300 ease-in-out absolute right-5 top-[60px] bg-[#0090AE] text-white p-3 rounded-full opacity-0 group-hover:opacity-100">
        <AiOutlineEye size={22} />
      </div>
      <button className="transition duration-300 ease-in-out bg-black px-11 py-[14px] rounded-full text-[12px] font-medium text-white absolute top-[265px] z-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
        Add to cart
      </button>
      <div className="flex flex-col items-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Rate disabled defaultValue={data?.rating} />
        <p className="text-lg font-medium">{data.name}</p>
        <p className="text-red-700 font-medium">$25.00</p>
      </div>
    </Link>
  );
};

export default CardComponent;
