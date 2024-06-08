import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryCreateInput = {
  deliveryPersonName?: string | null;
  order?: OrderWhereUniqueInput | null;
  phone?: string | null;
  status?: "Option1" | null;
  verificationCode?: string | null;
};
