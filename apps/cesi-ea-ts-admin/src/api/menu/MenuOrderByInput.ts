import { SortOrder } from "../../util/SortOrder";

export type MenuOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  restaurantId?: SortOrder;
  updatedAt?: SortOrder;
};
