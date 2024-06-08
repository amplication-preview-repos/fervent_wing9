import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="OrderNumber" source="orderNumber" />
        <NumberInput label="TotalAmount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};
