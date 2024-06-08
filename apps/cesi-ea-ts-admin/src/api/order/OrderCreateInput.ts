import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryCreateNestedManyWithoutOrdersInput } from "./DeliveryCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  deliveries?: DeliveryCreateNestedManyWithoutOrdersInput;
  deliveryCode?: string | null;
  menuItems?: string | null;
  orderNumber?: string | null;
  status?: "Option1" | null;
  totalPrice?: number | null;
};
