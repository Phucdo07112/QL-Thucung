import React, { useEffect, useMemo, useState } from "react";
import DashboardStatsGrid from "../DashboardStatsGrid";
import TransactionChart from "../TransactionChart";
import RecentOrders from "../RecentOrders";
import BuyerProfilePieChart from "../BuyerProfilePieChart";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import * as OrderService from "../../services/OrderService";
import * as UserService from "../../services/UserService";
import * as ProductService from "../../services/ProductService";
import * as PetsService from "../../services/PetsService";
import PopularProducts from "../popular";
import { Tabs } from "antd";
const AdminDashboard = () => {
  const user = useSelector((state) => state?.user);
  const getAllOrder = async () => {
    const res = await OrderService.getAllOrder(user?.access_token);
    return res.data;
  };
  const getAllUser = async () => {
    const res = await UserService.getAllUser(user?.access_token);
    return res;
  };

  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct();
    return res;
  };

  const getAllpets = async () => {
    const res = await PetsService.getAllPets();
    return res;
  };

  const queryOrder = useQuery({ queryKey: ["orders"], queryFn: getAllOrder });

  const queryProduct = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const queryUser = useQuery({
    queryKey: ["user"],
    queryFn: getAllUser,
  });

  const queryPet = useQuery({
    queryKey: ["pets"],
    queryFn: getAllpets,
  });

  const { isLoading: isLoadingpets, data: pets } = queryPet;

  const { isLoading: isLoadingOrders, data: orders } = queryOrder;

  const { isLoading: isLoadingProducts, data: products } = queryProduct;

  const { isLoading: isLoadingUser, data: users } = queryUser;

  console.log("products", orders);

  const totalPriceMemo = useMemo(() => {
    let total = 0;
    orders?.data?.map((order) => {
      if(order?.isDelivered === "Đơn Hàng Đã Hoàn Thành"){
        total = total + order?.totalPrice;
      }
    });
    return total;
  }, [orders?.data]);

  const totalExpensesProductMemo = useMemo(() => {
    let total = 0;
    products?.data?.map((product) => {
      if (product.expenses) {
        total = total + product?.expenses * product?.countInStock;
      }
    });
    return total;
  }, [products?.data]);

  const totalExpensesPetMemo = useMemo(() => {
    let total = 0;
    pets?.data?.map((pet) => {
      if (pet.expenses) {
        total = total + pet?.expenses * pet?.countInStock;
      }
    });
    return total;
  }, [pets?.data]);

  const totalExpenses = totalExpensesProductMemo + totalExpensesPetMemo
  const dataMonth = [
		{
			name: 'Jan',
			Expense: totalExpenses,
			Income: totalPriceMemo,
			Date: "01/11/2023"
		},
		{
			name: 'Feb',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Mar',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Apr',
			Expense: 0,
			Income: 0
		},
		{
			name: 'May',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Jun',
			Expense: 0,
			Income: 0
		},
		{
			name: 'July',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Aug',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Sep',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Oct',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Nov',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Dec',
			Expense: 0,
			Income: 0
		}
	]
  const items = [
    {
      key: "1",
      label: "Tuần",
      children: (
        <TransactionChart
        data={dataMonth}
        />
      ),
    },
    {
      key: "2",
      label: "Tháng",
      children: (
        <TransactionChart
        data={dataMonth}
        />
      ),
    },
    {
      key: "3",
      label: "Năm",
      children: (
        <TransactionChart
        data={dataMonth}
        />
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid
        totalPrice={totalPriceMemo}
        totalExpenses={totalExpensesProductMemo + totalExpensesPetMemo}
        totalOrder={orders?.data?.length}
        totalCustomers={users?.data?.length}
      />
      <div className="flex flex-row gap-4 w-full items-end">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          indicatorSize={(origin) => origin - 16}
        />

        <BuyerProfilePieChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders orders={orders} />
        <PopularProducts products={products} />
      </div>
    </div>
  );
};

export default AdminDashboard;
