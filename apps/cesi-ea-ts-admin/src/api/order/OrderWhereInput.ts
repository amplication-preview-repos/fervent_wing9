import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  deliveries?: DeliveryListRelationFilter;
  deliveryCode?: StringNullableFilter;
  id?: StringFilter;
  menuItems?: StringNullableFilter;
  orderNumber?: StringNullableFilter;
  status?: "Option1";
  totalPrice?: FloatNullableFilter;
};
