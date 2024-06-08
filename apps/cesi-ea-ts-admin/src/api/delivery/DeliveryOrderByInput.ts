import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  createdAt?: SortOrder;
  deliveryPersonName?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  phone?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  verificationCode?: SortOrder;
};
