import { Order } from "../order/Order";

export type Customer = {
  address: string | null;
  city: string | null;
  country: string | null;
  createdAt: Date;
  email: string | null;
  googleAuthId: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  password: string | null;
  phone: string | null;
  updatedAt: Date;
};
