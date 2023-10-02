import React, { useState } from "react";
import { Radio, Tabs } from "antd";
const HomePage = () => {
  const [mode, setMode] = useState("top");

  const data = [
    {
      dog: [
        {
          label: "cho ngao",
          children: [
            {
              image: "./images/dogLogin.jpg",
            },
            {
              image: "./images/dogDen.jpg",
            },
            {
              image: "./images/dogvang.jpg",
            }
          ]
        },
        {
          label: "cho den",
          children: [
            {
              image: "./images/choha.jpg",
            },
            {
              image: "./images/choha.jpg",
            },
            {
              image: "./images/choha.jpg",
            },
            {
              image: "./images/choha.jpg",
            },
            {
              image: "./images/choha.jpg",
            },
            {
              image: "./images/choha.jpg",
            },
            {
              image: "./images/choha.jpg",
            },
            {
              image: "./images/choha.jpg",
            },
            {
              image: "./images/choha.jpg",
            },
          ]
        },
      ]
    },
    {
      cat: [
        {
          label: "meo ngu",
          children: [
            {
              image: "./images/dogLogin.jpg",
            },
            {
              image: "./images/dogDen.jpg",
            },
            {
              image: "./images/dogSignup.jpg",
            }
          ]
        },
        {
          label: "meo hoang",
          children: [
            {
              image: "./images/choha.jpg",
            },
            {
              image: "./images/choha.jpg",
            },
            {
              image: "./images/choha.jpg",
            },
          ]
        },
      ]
    },
  ]
  return (
    <div className="mb-4">
      <div className="container">
        <div className="flex items-center pt-2 w-full gap-2 mb-6">
          <div className="flex-1 bg-white rounded-lg h-[345px] overflow-y-auto">
            <div className="flex items-center gap-3 border-b p-3 cursor-pointer">
              <img
                className="w-[50px] h-[50px] rounded-full object-contain"
                src="./images/Logo.png"
                alt=""
              />
              <p className="text-lg">Giống chó cảnh</p>
            </div>
            <div className="flex items-center gap-3 border-b p-3 cursor-pointer">
              <img
                className="w-[50px] h-[50px] rounded-full object-contain"
                src="./images/Logo.png"
                alt=""
              />
              <p className="text-lg">Giống chó cảnh</p>
            </div>
            <div className="flex items-center gap-3 border-b p-3 cursor-pointer">
              <img
                className="w-[50px] h-[50px] rounded-full object-contain"
                src="./images/Logo.png"
                alt=""
              />
              <p className="text-lg">Giống chó cảnh</p>
            </div>
            <div className="flex items-center gap-3 border-b p-3 cursor-pointer">
              <img
                className="w-[50px] h-[50px] rounded-full object-contain"
                src="./images/Logo.png"
                alt=""
              />
              <p className="text-lg">Giống chó cảnh</p>
            </div>
            <div className="flex items-center gap-3 border-b p-3 cursor-pointer">
              <img
                className="w-[50px] h-[50px] rounded-full object-contain"
                src="./images/Logo.png"
                alt=""
              />
              <p className="text-lg">Giống chó cảnh</p>
            </div>
            <div className="flex items-center gap-3 border-b p-3 cursor-pointer">
              <img
                className="w-[50px] h-[50px] rounded-full object-contain"
                src="./images/Logo.png"
                alt=""
              />
              <p className="text-lg">Giống chó cảnh</p>
            </div>
            <div className="flex items-center gap-3 border-b p-3 cursor-pointer">
              <img
                className="w-[50px] h-[50px] rounded-full object-contain"
                src="./images/Logo.png"
                alt=""
              />
              <p className="text-lg">Giống chó cảnh</p>
            </div>
          </div>
          <div className="flex-2">
            <img className="rounded-lg" src="./images/banner-pet1.jpg" alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <img className="rounded-lg" src="./images/banner-pet2.jpg" alt="" />
            <img className="rounded-lg" src="./images/banner-pet3.jpg" alt="" />
          </div>
        </div>
        <div className="flex w-full bg-white mt-10 rounded-lg overflow-hidden ">
          <div className="flex-1">
            <div className="w-full p-4 font-semibold text-white bg-[#BA0001]">
              Chó
            </div>
            <img
              className="w-[250px] h-full"
              src="./images/banner-dog.jpg"
              alt=""
            />
          </div>
          <div className="flex-1">
            <Tabs
              defaultActiveKey="0"
              tabPosition={mode}
              style={{
                height: 450,
                width: 950,
              }}
              items={data[0].dog.map((items, i) => {
                const id = String(i);
                return {
                  label: <div className="px-4 font-semibold">{items.label}</div>,
                  key: id,
                  children: (
                    <div className="pl-4 flex flex-wrap gap-6 overflow-auto h-[500px] pb-5">
                        {items.children.map((item) => (
                          <img
                            className="w-[200px] h-[350px] object-cover rounded-lg"
                            src={item.image}
                            alt=""
                          />
                        ))}
                    </div>
                  ),
                };
              })}
            />
          </div>
        </div>
        <div className="flex w-full bg-white mt-10 rounded-lg overflow-hidden ">
          <div className="flex-1">
            <div className="w-full p-4 font-semibold text-white bg-[#BA0001]">
              Mèo
            </div>
            <img
              className="w-[250px] h-full"
              src="./images/banner-cat.jpg"
              alt=""
            />
          </div>
          <div className="flex-1">
            <Tabs
              defaultActiveKey="0"
              tabPosition={mode}
              style={{
                height: 450,
                width: 950,
              }}
              items={data[1].cat.map((items, i) => {
                const id = String(i);
                return {
                  label: <div className="px-4 font-semibold">{items.label}</div>,
                  key: id,
                  children: (
                    <div className="pl-4 flex flex-wrap gap-6 overflow-auto h-[500px] pb-5">
                        {items.children.map((item) => (
                          <img
                            className="w-[200px] h-[400px] object-cover rounded-lg"
                            src={item.image}
                            alt=""
                          />
                        ))}
                    </div>
                  ),
                };
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
