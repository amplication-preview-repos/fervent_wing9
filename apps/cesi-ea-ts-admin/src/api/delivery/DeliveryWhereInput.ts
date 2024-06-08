import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryWhereInput = {
  deliveryPersonName?: StringNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  phone?: StringNullableFilter;
  status?: "Option1";
  verificationCode?: StringNullableFilter;
};
