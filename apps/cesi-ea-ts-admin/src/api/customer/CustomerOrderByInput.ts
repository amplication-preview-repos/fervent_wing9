import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  googleAuthId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
