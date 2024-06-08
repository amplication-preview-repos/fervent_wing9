import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  city?: string | null;
  country?: string | null;
  email?: string | null;
  googleAuthId?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  password?: string | null;
  phone?: string | null;
};
