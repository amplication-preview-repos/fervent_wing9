import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuUpdateInput = {
  availability?: boolean | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
