import { TTextField } from "@/components/UI/TextField";

export interface ContactsFormAttributes {
  fields: Array<TTextField>;
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
