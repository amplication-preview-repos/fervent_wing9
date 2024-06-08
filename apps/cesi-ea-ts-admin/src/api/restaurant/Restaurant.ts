import { Menu } from "../menu/Menu";

export type Restaurant = {
  address: string | null;
  city: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  menus?: Array<Menu>;
  name: string | null;
  phone: string | null;
  siret: string | null;
  updatedAt: Date;
};
