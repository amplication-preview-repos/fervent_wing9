import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MenuTitle } from "../menu/MenuTitle";

export const RestaurantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <ReferenceArrayInput
          source="menus"
          reference="Menu"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenuTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="SIRET" source="siret" />
      </SimpleForm>
    </Create>
  );
};
