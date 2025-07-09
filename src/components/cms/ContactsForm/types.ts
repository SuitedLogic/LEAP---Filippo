export interface ContactsFormAttributes {
  fields: Array<{
    name: string;
    type: 'text' | 'email' | 'textarea';
    label: string;
    required: boolean;
    options?: string[];
  }>;
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
