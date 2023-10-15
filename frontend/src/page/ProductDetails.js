import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { InputNumber, Rate } from "antd";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa6";
import { useLocation, useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../services/ProductService";
import * as message from "../components/Message/Message";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { addOrderProduct, resetOrder } from "../redux/slides/orderSlice";
const ProductDetails = () => {
  const { productId } = useParams();
  const [numProduct, setNumProduct] = useState(1);
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const [errorLimitOrder, setErrorLimitOrder] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const getDetailProduct = async (context) => {
    const id = context.queryKey && context.queryKey[1];
    const res = await ProductService.getDetailsProduct(id);
    return res.data;
  };

  const queryDetailProduct = useQuery({
    queryKey: ["product-detail", productId],
    queryFn: getDetailProduct,
  });

  const { isLoading: isLoadingProduct, data: productDetails } =
    queryDetailProduct;

  const product = productDetails;

  const onChange = (value) => {
    setNumProduct(Number(value));
  };

  useEffect(() => {
    const orderRedux = order?.orderItems?.find(
      (item) => item.product === productDetails?._id
    );
    if (
      orderRedux?.amount + numProduct <= orderRedux?.countInstock ||
      (!orderRedux && productDetails?.countInStock > 0)
    ) {
      setErrorLimitOrder(false);
    } else if (productDetails?.countInStock === 0) {
      setErrorLimitOrder(true);
    }
  }, [numProduct]);

  useEffect(() => {
    if (order.isSucessOrder) {
      message.success("Đã thêm vào giỏ hàng");
    }
    return () => {
      dispatch(resetOrder());
    };
  }, [order.isSucessOrder]);

  const handleChangeCount = (type, limited) => {
    if (type === "increase") {
      if (!limited) {
        setNumProduct(numProduct + 1);
      }
    } else {
      if (!limited) {
        setNumProduct(numProduct - 1);
      }
    }
  };

  const handleAddOrderProduct = () => {
    if (!user?.id) {
      navigate("/login", { state: location?.pathname });
    } else {
      // {
      //     name: { type: String, required: true },
      //     amount: { type: Number, required: true },
      //     image: { type: String, required: true },
      //     price: { type: Number, required: true },
      //     product: {
      //         type: mongoose.Schema.Types.ObjectId,
      //         ref: 'Product',
      //         required: true,
      //     },
      // },
      const orderRedux = order?.orderItems?.find(
        (item) => item?.product === productDetails?._id
      );
      console.log("orderRedux",productDetails);
      if (
        orderRedux?.amount + numProduct <= orderRedux?.countInstock ||
        (!orderRedux && productDetails?.countInStock > 0)
      ) {
        dispatch(
          addOrderProduct({
            orderItem: {
              name: productDetails?.name,
              amount: numProduct,
              image: productDetails?.image,
              price: productDetails?.price,
              product: productDetails?._id,
              discount: productDetails?.discount,
              countInstock: productDetails?.countInStock,
            },
          })
        );
      } else {
        setErrorLimitOrder(true);
      }
    }
  };
  return (
    <div className="pb-10 bg-white">
      <Banner title="ProductDetails" link="Home / ProductDetails" />
      <div className="container">
        {product && (
          <div className="flex gap-5 pt-8" key={product?._id}>
            <div className="flex-1 bg-[#FAF7F2] p-6 rounded-lg h-[570px]">
              <img
                className="rounded-lg h-[520px] w-full object-cover"
                src={product?.image}
                alt=""
              />
            </div>
            <div className="flex-1">
              <div className="flex items-end gap-6">
                <h3 className="text-[40px] font-bold text-gray-700">
                  {product?.name}
                </h3>
                <p className="font-bold text-[21px] text-red-500">$25.00</p>
              </div>
              <div className="flex items-center gap-2 mt-5 mb-5">
                <Rate disabled defaultValue={`${product?.rating}`} />
                <p className="font-medium text-gray-500">2 Customer Reviews</p>
              </div>
              <hr />
              <p className="font-medium text-gray-500 my-3 text-[17px] leading-6">
                {product?.description}
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
                <div className="flex gap-1 items-center w-[120px] border border-[#ccc] rounded-lg">
                  <button
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleChangeCount("decrease", numProduct === 1)
                    }
                  >
                    <MinusOutlined
                      style={{ color: "#000", fontSize: "20px" }}
                    />
                  </button>
                  <InputNumber
                    style={{
                      borderTop: "none",
                      borderBottom: "none",
                      width: "40px",
                    }}
                    defaultValue={1}
                    min={1}
                    max={productDetails?.countInStock}
                    onChange={onChange}
                    value={numProduct}
                    size="small"
                  />
                  <button
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleChangeCount(
                        "increase",
                        numProduct === productDetails?.countInStock
                      )
                    }
                  >
                    <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="bg-[#ff642f] px-11 py-[17px] rounded-full font-medium text-white"
                  onClick={handleAddOrderProduct}
                >
                  Add to cart
                </button>
                <button className="bg-[#ffbc3e] px-11 py-[17px] rounded-full font-medium text-white">
                  Add to wishfist
                </button>
              </div>
              {errorLimitOrder && <div style={{color: 'red'}}>San pham het hang</div>}
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
        )}
        <div>
          <h4 className="text-[30px] font-bold text-gray-700 mt-8">
            3 reviews
          </h4>
          <div>
            <div className="flex gap-5 my-7">
              <div>
                <img
                  className="w-[150px] rounded-full"
                  src="../images/trang.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-700">Đài Trang</p>
                    <p className="text-red-600 font-medium">
                      20 April, 2022 . 4:00 pm
                    </p>
                  </div>
                  <div>
                    <Rate disabled defaultValue={2} />
                  </div>
                </div>
                <p className="text-[18px]">
                  Mua con này về chắc tôi phải đấm nó ngày chục cử ~~
                </p>
              </div>
            </div>
            <hr />
            <div className="flex gap-5 my-7">
              <div>
                <img
                  className="w-[150px] rounded-full"
                  src="../images/tanhung.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-700">
                      Thầy ông nội
                    </p>
                    <p className="text-red-600 font-medium">
                      20 April, 2022 . 4:00 pm
                    </p>
                  </div>
                  <div>
                    <Rate disabled defaultValue={2} />
                  </div>
                </div>
                <p className="text-[18px]">
                  Chó là để yêu thương, nhưng con này mất dạy quá ông chỉ thương
                  diễm my thui.
                </p>
              </div>
            </div>
            <hr />

            
          </div>
        </div>
        <div className="">
          <h4 className="text-[30px] font-bold text-gray-700 my-8">
            Add a review
          </h4>
          <div className="flex items-center gap-4">
            <p>Rate this Product?</p> <Rate />
          </div>
          <form className="w-full flex flex-col gap-8 mt-5">
            <textarea
              className="w-full h-[150px] rounded-lg bg-[#FAF7F2] border-none p-4 "
              placeholder="Write a comment"
            />
            <div className="flex items-center gap-8">
              <input
                className="flex-1 bg-[#FAF7F2] rounded-lg p-4 focus:outline-none focus:ring focus:ring-[#FF642F]"
                placeholder="Your name"
              />
              <input
                className="flex-1 bg-[#FAF7F2] rounded-lg  p-4 focus:outline-none focus:ring focus:ring-[#FF642F]"
                placeholder="Email address"
              />
            </div>
            <button className="bg-[#ff642f] px-11 py-[17px] rounded-full font-medium text-white w-[200px]">
              Submit a review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
