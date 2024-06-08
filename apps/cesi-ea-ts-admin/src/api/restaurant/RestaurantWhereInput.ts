import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuListRelationFilter } from "../menu/MenuListRelationFilter";

export type RestaurantWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  menus?: MenuListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  siret?: StringNullableFilter;
};
