import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  email?: StringNullableFilter;
  googleAuthId?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  password?: StringNullableFilter;
  phone?: StringNullableFilter;
};
