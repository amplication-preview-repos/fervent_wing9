import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuCreateInput = {
  availability?: boolean | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
