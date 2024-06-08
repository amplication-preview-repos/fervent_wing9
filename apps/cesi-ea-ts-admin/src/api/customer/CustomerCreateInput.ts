import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  city?: string | null;
  country?: string | null;
  email?: string | null;
  googleAuthId?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  password?: string | null;
  phone?: string | null;
};
