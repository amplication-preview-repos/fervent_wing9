import { Order } from "../order/Order";

export type Delivery = {
  createdAt: Date;
  deliveryPersonName: string | null;
  id: string;
  order?: Order | null;
  phone: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
  verificationCode: string | null;
};
