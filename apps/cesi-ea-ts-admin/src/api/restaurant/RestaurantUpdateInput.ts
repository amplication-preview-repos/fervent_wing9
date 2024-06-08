import { MenuUpdateManyWithoutRestaurantsInput } from "./MenuUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  city?: string | null;
  country?: string | null;
  menus?: MenuUpdateManyWithoutRestaurantsInput;
  name?: string | null;
  phone?: string | null;
  siret?: string | null;
};
