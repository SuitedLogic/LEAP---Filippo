import { TextFieldProps } from "@/components/UI/TextField";

export interface ContactsFormAttributes {
  fields: Array<TextFieldProps>;
  submission: {
    endpoint: string;
    method: string;
    successMessage: string;
    errorMessage: string;
  }
}

export interface ContactsFormSection {
  id: string;
  type: 'contacts_form';
  attributes: ContactsFormAttributes;
}
