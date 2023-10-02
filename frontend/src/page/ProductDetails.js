import React from 'react'
import Banner from "../components/Banner";
import { InputNumber, Rate } from "antd";

const ProductDetails = () => {
  const onChange = (value) => {
    console.log('changed', value);
  };
  return (
    <div className='pb-10 bg-white'>
        <Banner title="ProductDetails" link="Home / ProductDetails" />
        <div className="container">
        <div className="flex gap-5 pt-5">
          <div className="flex-1 bg-[#FAF7F2] p-6 rounded-lg">
            <img className="rounded-lg" src="./images/dogvang.jpg" alt="" />
          </div>
          <div className="flex-1">
            <div className="flex items-end gap-6">
              <h3 className="text-3xl font-bold text-gray-700">
                Pet natural lysine
              </h3>
              <p className="font-bold text-[17px] text-red-700">$25.00</p>
            </div>
            <div className="flex items-center gap-2 mt-5 mb-5">
              <Rate />
              <p className="font-medium text-gray-500">2 Customer Reviews</p>
            </div>
            <hr />
            <p className="font-medium text-gray-500 my-5 text-[17px]" >
              Lorem Chỉ đơn giản rằng Chang chia sẻ các bài hát mà có thể bạn
              chưa bao giờ được nghe. * Nhận phát hành các bản lo-fi, Indie,
              nhạc chill... chỉ cần phù hợp với channel là Support liền ^^ 💛
              Follow Chang:
            </p>
            <p className="font-medium text-gray-500 text-[17px] " >
              REF. 4231/406
            </p>
            <p className="font-medium text-gray-500 mt-2  text-[17px]" >
              Avallable in store
            </p>
            <div className="flex items-center gap-3 my-11">
              <h6 className="text-lg font-bold text-gray-700">Choose quantity</h6>
              <InputNumber style={{ height:50,paddingTop:10 }} min={1} max={10} defaultValue={3} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails