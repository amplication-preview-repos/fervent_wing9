import { Delivery as TDelivery } from "../api/delivery/Delivery";

export const DELIVERY_TITLE_FIELD = "deliveryPersonName";

export const DeliveryTitle = (record: TDelivery): string => {
  return record.deliveryPersonName?.toString() || String(record.id);
};
