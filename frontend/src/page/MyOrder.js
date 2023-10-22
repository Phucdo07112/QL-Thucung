import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import * as message from "../components/Message/Message";
import { useSelector } from "react-redux";
import { useMutationHooks } from "../hooks/useMutationHook";
import * as OrderService from "../services/OrderService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/LoadingComponent/Loading";
import { convertPrice } from "../utils/jsonString";
import ButtonComponent from "../components/ButtonComponent/ButtonComponent";
const MyOrder = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const fetchMyOrder = async () => {
    const res = await OrderService.getOrderByUserId(state?.id, state?.token);
    return res.data;
  };
  const user = useSelector((state) => state.user);

  const queryOrder = useQuery(
    { queryKey: ["orders"], queryFn: fetchMyOrder },
    {
      enabled: state?.id && state?.token,
    }
  );
  const { isLoading, data } = queryOrder;

  const handleDetailsOrder = (id) => {
    navigate(`/details-order/${id}`, {
      state: {
        token: state?.token,
      },
    });
  };
  const mutation = useMutationHooks((data) => {
    const { id, token, orderItems,orderPetItems, userId } = data;

    const res = OrderService.cancelOrder(id, token, orderItems,orderPetItems, userId);
    return res;
  });
  const handleCanceOrder = (order) => {
    mutation.mutate(
      {
        id: order?._id,
        token: state?.token,
        orderItems: order?.orderItems,
        orderPetItems: order?.orderPetItems,
        userId: user.id,
      },
      {
        onSuccess: () => {
          queryOrder.refetch();
        },
      }
    );
  };
  const {
    isLoading: isLoadingCancel,
    isSuccess: isSuccessCancel,
    isError: isErrorCancle,
    data: dataCancel,
  } = mutation;
  
  console.log('mutation',mutation);

  useEffect(() => {
    if (isSuccessCancel && dataCancel?.status === "OK") {
      message.success();
    } else if (isSuccessCancel && dataCancel?.status === "ERR") {
      message.error(dataCancel?.message);
    } else if (isErrorCancle) {
      message.error();
    }
  }, [isErrorCancle, isSuccessCancel]);

  const renderProduct = (data) => {
    return data?.map((order) => {
      return (
        <div className="flex items-center p-3 bg-[#faf6f1] mt-2 rounded-lg" key={order?._id}>
          <img
            className="rounded-lg"
            src={order?.image}
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              border: "1px solid rgb(238, 238, 238)",
              padding: "2px",
            }}
            alt=""
          />
          <div
            style={{
              width: 260,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginLeft: "10px",
            }}
          >
            {order?.name}
          </div>
          <span
            style={{ fontSize: "13px", color: "#242424", marginLeft: "auto" }}
          >
            {convertPrice(order?.price)}
          </span>
        </div>
      );
    });
  };
  return (
    <Loading isLoading={isLoadingCancel}>
      <div className=" py-5">
        <div className="container">
          <div className="bg-[#FF642F] text-white w-[280px] flex items-center justify-center p-2 rounded-lg ">
            <p className="text-lg font-bold ">Đơn hàng của tôi</p>
          </div>
          <div className="">
            {data?.map((order) => {
              return (
                <div
                  className="border-2 bg-white my-3 p-5 rounded-lg"
                  key={order?._id}
                >
                  <div className="">
                    <span className="" style={{ fontSize: "18px", fontWeight: "bold" }}>
                      Trạng thái
                    </span>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="bg-[#222222] p-2 rounded-lg">
                        <span style={{ color: "white" }}>Giao hàng: </span>
                        <span
                          style={{
                            color: "rgb(90, 32, 193)",
                            fontWeight: "bold",
                          }}
                        >{`${
                          order?.isDelivered ? "Đã giao hàng" : "Chưa giao hàng"
                        }`}</span>
                      </div>
                      <div className="bg-[#222222] p-2 rounded-lg">
                        <span style={{ color: "white" }}>
                          Thanh toán:{" "}
                        </span>
                        <span
                          style={{
                            color: "rgb(90, 32, 193)",
                            fontWeight: "bold",
                          }}
                        >{`${
                          order?.isPaid ? "Đã thanh toán" : "Chưa thanh toán"
                        }`}</span>
                      </div>
                    </div>
                  </div>
                  {renderProduct(order?.orderItems)}
                  {renderProduct(order?.orderPetItems)}
                  <div className="flex items-end flex-col gap-2 mt-2">
                    <div>
                      <span style={{ color: "rgb(255, 66, 78)" }}>
                        Tổng tiền:{" "}
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          color: "rgb(56, 56, 61)",
                          fontWeight: 700,
                        }}
                      >
                        {convertPrice(order?.totalPrice)}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        className="bg-red-500 px-6 py-[14px] rounded-lg font-medium text-white"
                        onClick={() => handleCanceOrder(order)}
                      >
                        Hủy đơn hàng
                      </button>
                      <button
                        className="bg-[#ffbc3e] px-6 py-[14px] rounded-lg font-medium text-white"
                        onClick={() => handleDetailsOrder(order?._id)}
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default MyOrder;