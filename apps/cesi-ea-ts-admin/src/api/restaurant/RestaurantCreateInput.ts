import { MenuCreateNestedManyWithoutRestaurantsInput } from "./MenuCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  city?: string | null;
  country?: string | null;
  menus?: MenuCreateNestedManyWithoutRestaurantsInput;
  name?: string | null;
  phone?: string | null;
  siret?: string | null;
};
