export type Order = {
  createdAt: Date;
  date: Date | null;
  id: string;
  orderNumber: string | null;
  totalAmount: number | null;
  updatedAt: Date;
};
