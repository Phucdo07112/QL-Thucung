import React from "react";
import Banner from "../components/Banner";
import { InputNumber, Rate } from "antd";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa6";
const ProductDetails = () => {
  const onChange = (value) => {
    console.log("changed", value);
  };
  return (
    <div className="pb-10 bg-white">
      <Banner title="ProductDetails" link="Home / ProductDetails" />
      <div className="container">
        <div className="flex gap-5 pt-8">
          <div className="flex-1 bg-[#FAF7F2] p-6 rounded-lg">
            <img className="rounded-lg" src="./images/dogvang.jpg" alt="" />
          </div>
          <div className="flex-1">
            <div className="flex items-end gap-6">
              <h3 className="text-[40px] font-bold text-gray-700">
                Pet natural lysine
              </h3>
              <p className="font-bold text-[21px] text-red-500">$25.00</p>
            </div>
            <div className="flex items-center gap-2 mt-5 mb-5">
              <Rate disabled defaultValue={2} />
              <p className="font-medium text-gray-500">2 Customer Reviews</p>
            </div>
            <hr />
            <p className="font-medium text-gray-500 my-5 text-[17px]">
              Lorem Chỉ đơn giản rằng Chang chia sẻ các bài hát mà có thể bạn
              chưa bao giờ được nghe. * Nhận phát hành các bản lo-fi, Indie,
              nhạc chill... chỉ cần phù hợp với channel là Support liền ^^ 💛
              Follow Chang:
            </p>
            <p className="font-medium text-gray-500 text-[17px] pt-11 ">
              REF. 4231/406
            </p>
            <p className="font-medium text-gray-500 mt-2  text-[17px]">
              Avallable in store
            </p>
            <div className="flex items-center gap-5 my-11">
              <h6 className="text-lg font-bold text-gray-700">
                Choose quantity
              </h6>
              <InputNumber
                style={{ height: 50, paddingTop: 10 }}
                min={1}
                max={10}
                defaultValue={3}
                onChange={onChange}
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-[#ff642f] px-11 py-[17px] rounded-full font-medium text-white">
                Add to cart
              </button>
              <button className="bg-[#ffbc3e] px-11 py-[17px] rounded-full font-medium text-white">
                Add to wishfist
              </button>
            </div>
            <div className="flex items-center gap-4 mt-11">
              <p className="text-lg font-bold text-gray-700">
                Share with friends
              </p>
              <div className="flex items-center gap-2">
                <div className="transition duration-300 ease-in-out flex items-center justify-center bg-[#FAF7F2] hover:bg-[#0866FF] p-4 text-[18px] rounded-full hover:text-white cursor-pointer">
                  <BsFacebook />
                </div>
                <div className="transition duration-300 ease-in-out flex items-center justify-center bg-[#FAF7F2] hover:bg-[#1D9BF0] p-4 text-[18px] rounded-full hover:text-white cursor-pointer">
                  <BsTwitter />
                </div>
                <div className="transition duration-300 ease-in-out flex items-center justify-center bg-[#FAF7F2] hover:bg-[#CD3058] p-4 text-[18px] rounded-full hover:text-white cursor-pointer">
                  <BsInstagram />
                </div>
                <div className="transition duration-300 ease-in-out flex items-center justify-center bg-[#FAF7F2] hover:bg-[#E60023] p-4 text-[18px] rounded-full hover:text-white cursor-pointer">
                  <FaPinterestP />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-[30px] font-bold text-gray-700 mt-8">2 reviews</h4>
          <div>
            <div className="flex gap-5 my-7">
              <div>
                <img
                  className="w-[150px] rounded-full"
                  src="./images/dogvang.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-700">
                      Kevin martin
                    </p>
                    <p className="text-red-600 font-medium">
                      20 April, 2022 . 4:00 pm
                    </p>
                  </div>
                  <div>
                  <Rate disabled defaultValue={2} />
                  </div>
                </div>
                <p>
                  Lorem Chỉ đơn giản rằng Chang chia sẻ các bài hát mà có thể
                  bạn chưa bao giờ được nghe. * Nhận phát hành các bản lo-fi,
                  Indie, nhạc chill... chỉ cần phù hợp với channel là Support
                  liền ^^ 💛 Follow Chang:
                </p>
              </div>
            </div>
            <hr />
            <div className="flex gap-5 my-7">
              <div>
                <img
                  className="w-[150px] rounded-full"
                  src="./images/dogvang.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-700">
                      Kevin martin
                    </p>
                    <p className="text-red-600 font-medium">
                      20 April, 2022 . 4:00 pm
                    </p>
                  </div>
                  <div>
                    <Rate disabled defaultValue={2} />
                  </div>
                </div>
                <p>
                  Lorem Chỉ đơn giản rằng Chang chia sẻ các bài hát mà có thể
                  bạn chưa bao giờ được nghe. * Nhận phát hành các bản lo-fi,
                  Indie, nhạc chill... chỉ cần phù hợp với channel là Support
                  liền ^^ 💛 Follow Chang:
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="pb-10">
          <h4 className="text-[30px] font-bold text-gray-700 my-8">Add a review</h4>
          <div className="flex items-center gap-4"><p>Rate this Product?</p> <Rate /></div>
          <form className="w-full flex flex-col gap-8 mt-5">
            <textarea className="w-full h-[150px] rounded-lg bg-[#FAF7F2] border-none p-4 " placeholder="Write a comment"/>
            <div className="flex items-center gap-8">
              <input className="flex-1 bg-[#FAF7F2] rounded-lg p-4 focus:outline-none focus:ring focus:ring-[#FF642F]" placeholder="Your name"/>
              <input className="flex-1 bg-[#FAF7F2] rounded-lg  p-4 focus:outline-none focus:ring focus:ring-[#FF642F]" placeholder="Email address"/>
            </div>
            <button className="bg-[#ff642f] px-11 py-[17px] rounded-full font-medium text-white w-[200px]">Submit a review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
