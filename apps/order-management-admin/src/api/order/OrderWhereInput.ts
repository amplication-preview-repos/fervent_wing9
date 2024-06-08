import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  orderNumber?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
};
