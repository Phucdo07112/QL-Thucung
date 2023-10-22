import React from "react";
import { useLocation } from "react-router";
import Loading from "../../components/LoadingComponent/Loading";
import { orderContant } from "../../contant";
import { convertPrice } from "../../utils/jsonString";
const OrderSuccess = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div></div>
  );
};

export default OrderSuccess;
