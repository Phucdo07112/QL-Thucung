import React, { useState } from "react";
import { convertPrice, renderOptionsOrder } from "../../utils/jsonString";
import { Button, Form, Select, Space } from "antd";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputHeader";
import DrawerComponent from "../Drawer/DrawerComponent";
import Loading from "../LoadingComponent/Loading";
import ModalComponent from "../ModalComponent/ModalComponent";
import { useEffect } from "react";
import * as message from "../Message/Message";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiCartAdd } from "react-icons/bi";
import * as OrderService from "../../services/OrderService";
import { AiOutlineEye } from "react-icons/ai";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { orderContant } from "../../contant";
import { useNavigate } from "react-router-dom";
import PieChartComponent from "./PieChart";
import { useMutationHooks } from "../../hooks/useMutationHook";
const AdminOrder = () => {
  const user = useSelector((state) => state?.user);
  const [orderDetail, setOrderDetail] = useState(false);
  const [rowSelected, setRowSelected] = useState("");
  const navigate = useNavigate();

  const getAllOrder = async () => {
    const res = await OrderService.getAllOrder(user?.access_token);
    return res;
  };

  const mutationOrderDetail = useMutationHooks(async (data) => {
    const { id } = data;
    const res = await OrderService.getDetailsOrder(id);
    console.log("res?.data", res);
    return res?.data;
  });

  const mutationUpdate = useMutationHooks((data) => {
    const { id, token, isPaid, isDelivered, ...rests } = data;
    const res = OrderService.updateOrder(id, token, { isPaid, isDelivered, ...rests });
    return res;
  });

  const queryOrder = useQuery({ queryKey: ["orders"], queryFn: getAllOrder });
  const { isLoading: isLoadingOrders, data: orders } = queryOrder;

  const {
    data: dataOrder,
    isLoading: isLoadingUpdate,
    isSuccess: isSuccessUpdate,
    isError: isErrorUpdate,
  } = mutationOrderDetail;

  const {
    data: dataUpdated,
    isLoading: isLoadingUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdated,
  } = mutationUpdate;


  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <InputComponent
          // ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          // onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            // onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            // onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        // setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     // <Highlighter
    //     //   highlightStyle={{
    //     //     backgroundColor: '#ffc069',
    //     //     padding: 0,
    //     //   }}
    //     //   searchWords={[searchText]}
    //     //   autoEscape
    //     //   textToHighlight={text ? text.toString() : ''}
    //     // />
    //   ) : (
    //     text
    //   ),
  });

  const handleOrderDetails = () => {
    // mutationOrderDetail.mutate({ id: rowSelected });
    setOrderDetail(true);
  };

  useEffect(() => {
    if (rowSelected) {
      mutationOrderDetail.mutate({ id: rowSelected });
    }
  }, [rowSelected]);

  const renderAction = () => {
    return (
      <div>
        {/* <DeleteOutlined
          style={{
            fontSize: "20px",
            color: "white",
            backgroundColor: "red",
            padding: "8px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => setIsModalOpenDelete(true)}
        /> */}
        <AiOutlineEye
          style={{
            fontSize: "20px",
            color: "white",
            backgroundColor: "#0090AE",
            borderRadius: "5px",
            marginLeft: "10px",
            cursor: "pointer",
            width: "30px",
            height: "30px",
          }}
          onClick={handleOrderDetails}
        />
      </div>
    );
  };
  const renderImage = (image) => {
    return (
      <div>
        <img
          className="w-[60px] h-[60px] rounded-lg object-cover"
          src={image}
          alt=""
        />
      </div>
    );
  };

  const columns = [
    {
      title: "User name",
      dataIndex: "userName",
      sorter: (a, b) => a.userName.length - b.userName.length,
      ...getColumnSearchProps("userName"),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.length - b.phone.length,
      ...getColumnSearchProps("phone"),
    },
    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => a.address.length - b.address.length,
      ...getColumnSearchProps("address"),
    },
    {
      title: "Paided",
      dataIndex: "isPaid",
      sorter: (a, b) => a.isPaid.length - b.isPaid.length,
      ...getColumnSearchProps("isPaid"),
    },
    {
      title: "Shipped",
      dataIndex: "isDelivered",
      sorter: (a, b) => a.isDelivered.length - b.isDelivered.length,
      ...getColumnSearchProps("isDelivered"),
    },
    {
      title: "Payment method",
      dataIndex: "paymentMethod",
      sorter: (a, b) => a.paymentMethod.length - b.paymentMethod.length,
      ...getColumnSearchProps("paymentMethod"),
    },
    {
      title: "Total price",
      dataIndex: "totalPrice",
      sorter: (a, b) => a.totalPrice.length - b.totalPrice.length,
      ...getColumnSearchProps("totalPrice"),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: renderAction,
    },
  ];



  const handleChangeSelectOrderPaid = (value) => {
    mutationUpdate.mutate(
      {
        id: rowSelected,
        token: user?.access_token,
        ...dataOrder,
        isPaid: value === "Đã Thanh Toán" ? true : false,
      },
      {
        onSettled: () => {
          queryOrder.refetch();
        },
      }
    );
  }

  const handleChangeSelectOrderisDelivered = (value) => {
    mutationUpdate.mutate(
      {
        id: rowSelected,
        token: user?.access_token,
        ...dataOrder,
        isDelivered: value === "Đã Giao" ? true : false,
      },
      {
        onSettled: () => {
          queryOrder.refetch();
        },
      }
    );
  }
  const dataTable =
    orders?.data?.length &&
    orders?.data?.map((order) => {
      return {
        ...order,
        key: order._id,
        userName: order?.shippingAddress?.fullName,
        phone: order?.shippingAddress?.phone,
        address: order?.shippingAddress?.address,
        paymentMethod: orderContant.payment[order?.paymentMethod],
        isPaid: (
            <Select
              name="Order"
              // defaultValue="lucy"
              style={{
                width: "100%",
              }}
              value={order?.isPaid ? "Đã Thanh Toán" : "Chưa thanh toán" }
              onChange={handleChangeSelectOrderPaid}
              options={[
                {
                  value: "Đã Thanh Toán" ,
                  label: "Đã Thanh Toán"
                },
                {
                  value: "Chưa Thanh Toán" ,
                  label: "Chưa Thanh Toán"
                },
              ]}
            />
        ) ,
        isDelivered: (
          <Select
            name="Orders"
            // defaultValue="lucy"
            style={{
              width: "100%",
            }}
            value={order?.isDelivered ? "Đã Giao" : "Chưa Giao" }
            onChange={handleChangeSelectOrderisDelivered}
            options={[
              {
                value: "Đã Giao" ,
                label: "Đã Giao"
              },
              {
                value: "Chưa Giao" ,
                label: "Chưa Giao"
              },
            ]}
          />
      ) ,
        totalPrice: convertPrice(order?.totalPrice),
      };
    });
  const dataTableDetailProduct =
    dataOrder?.orderItems &&
    dataOrder?.orderItems?.map((order) => {
      return {
        ...order,
        key: order?._id,
        image: order?.image,
        name: order?.name,
        amount: order?.amount,
        price: order?.price,
      };
    });

  const dataTableDetailPet =
    dataOrder?.orderPetItems &&
    dataOrder?.orderPetItems?.map((order) => {
      return {
        ...order,
        key: order?._id,
        name: order?.name,
      };
    });

  const dataOrder11 =
    dataOrder && dataTableDetailProduct.concat(dataTableDetailPet);

  const columnsDetail = [
    {
      title: "image",
      dataIndex: "image",
      render: renderImage,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps("name"),
    },
    {
      title: "amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "price",
      dataIndex: "price",
      sorter: (a, b) => a.price.length - b.price.length,
    },
  ];


  return (
    <Loading isLoading={isLoadingUpdated}>
      <div>
      {/* <div>Quản lý đơn hàng</div> */}
      {/* <div style={{ height: 200, width: 200 }}>
        <PieChartComponent data={orders?.data} />
      </div> */}
      <div style={{ marginTop: "20px" }}>
        <TableComponent
          iconTitle={<BsFillCartCheckFill size={40} />}
          title="Order Lists"
          iconAdd={<BiCartAdd size={18} />}
          AddTitle="Create Order"
          // IsShowModal={setIsModalOpen}
          // handleDeleteMany={handleDelteManyProducts}
          columns={columns}
          data={dataTable}
          isLoading={isLoadingOrders}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRowSelected(record._id);
              }, // click row
            };
          }}
        />
        {orderDetail && (
          <TableComponent
            iconTitle={<BsFillCartCheckFill size={40} />}
            title="OrderDetail"
            // iconAdd={<BiCartAdd size={18} />}
            // AddTitle="Create Order"
            // IsShowModal={setIsModalOpen}
            // handleDeleteMany={handleDelteManyProducts}
            columns={columnsDetail}
            data={dataOrder11}
            // isLoading={isLoadingOrders}
            // onRow={(record, rowIndex) => {
            //   return {
            //     onClick: (event) => {
            //       setRowSelected(record._id);
            //     }, // click row
            //   };
            // }}
          />
        )}
      </div>
    </div>
    </Loading>
  );
};

export default AdminOrder;
