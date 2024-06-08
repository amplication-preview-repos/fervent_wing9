import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "deliveryCode";

export const OrderTitle = (record: TOrder): string => {
  return record.deliveryCode?.toString() || String(record.id);
};
