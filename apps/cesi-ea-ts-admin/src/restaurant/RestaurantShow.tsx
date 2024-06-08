import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { RESTAURANT_TITLE_FIELD } from "./RestaurantTitle";

export const RestaurantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="city" source="city" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phone" source="phone" />
        <TextField label="SIRET" source="siret" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Menu"
          target="restaurantId"
          label="Menus"
        >
          <Datagrid rowClick="show">
            <BooleanField label="availability" source="availability" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="price" source="price" />
            <ReferenceField
              label="Restaurant"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
