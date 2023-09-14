import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
  shippingAddress: {},
  paymentMethod: "",
  itemsPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
  user: "",
  isPaid: false,
  paidAt: "",
  isDelivered: false,
  deliveredAt: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderProduct: (state, action) => {
      const { orderItem } = action.payload;
      const itemOrder = state?.orderItems.find(
        (item) => item?.product === orderItem.product
      );
      if (itemOrder) {
        //nếu đã có sản phẩm đó thì + số lượng
        itemOrder.amount += orderItem?.amount;
      } else {
        // ko thì thêm vào product mới
        state.orderItems.push(orderItem);
      }
    },
    removeOrderProduct: (state, action) => {
      const {idProduct} = action.payload
      
      const itemOrder = state?.orderItems?.filter((item) => item?.product !== idProduct)
      const itemOrderSeleted = state?.orderItemsSlected?.filter((item) => item?.product !== idProduct)

      state.orderItems = itemOrder;
      state.orderItemsSlected = itemOrderSeleted; 
    },
    increaseAmount: (state, action) => {
      const { idProduct } = action.payload;
      const itemOrder = state?.orderItems?.find(
        (item) => item?.product === idProduct
      );
      const itemOrderSelected = state?.orderItemsSlected?.find(
        (item) => item?.product === idProduct
      );
      itemOrder.amount++;
      if (itemOrderSelected) {
        itemOrderSelected.amount++;
      }
    },
    decreaseAmount: (state, action) => {
      const {idProduct} = action.payload
      const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct)
      const itemOrderSelected = state?.orderItemsSlected?.find((item) => item?.product === idProduct)
      itemOrder.amount--;
      if(itemOrderSelected) {
        itemOrderSelected.amount--;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOrderProduct,removeOrderProduct,increaseAmount,decreaseAmount  } = orderSlice.actions;

export default orderSlice.reducer;
