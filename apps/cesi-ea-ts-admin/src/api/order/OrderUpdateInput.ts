import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryUpdateManyWithoutOrdersInput } from "./DeliveryUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  deliveries?: DeliveryUpdateManyWithoutOrdersInput;
  deliveryCode?: string | null;
  menuItems?: string | null;
  orderNumber?: string | null;
  status?: "Option1" | null;
  totalPrice?: number | null;
};
