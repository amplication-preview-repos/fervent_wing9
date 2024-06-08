import { Restaurant } from "../restaurant/Restaurant";

export type Menu = {
  availability: boolean | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  restaurant?: Restaurant | null;
  updatedAt: Date;
};
