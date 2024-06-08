import { Customer } from "../customer/Customer";
import { Delivery } from "../delivery/Delivery";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  deliveries?: Array<Delivery>;
  deliveryCode: string | null;
  id: string;
  menuItems: string | null;
  orderNumber: string | null;
  status?: "Option1" | null;
  totalPrice: number | null;
  updatedAt: Date;
};
