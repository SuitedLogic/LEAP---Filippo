import Button from "@/components/UI/Button";
import TextField, { TextFieldProps } from "@/components/UI/TextField";
import Typography from "@/components/UI/Typography";
import { useCMS } from "@/contexts/CmsContext";
import { useSubmitForm } from "@/hooks/submitForm.hook";

export interface ContactFormData {
    id: string;
    type: string;
    attributes: {
        fields: TextFieldProps[];
        submission: {
            endpoint: string;
            method: string;
            successMessage: string;
            errorMessage: string;
        };
    };
}

const ContactsForm: React.FC = () => {
    const { getSectionById } = useCMS();
    const contactData = getSectionById('contact-form') as ContactFormData | null;

    if (!contactData || !contactData.attributes) {
        return null; 
    }

    const { submitForm } = useSubmitForm();

    const {endpoint, method} = contactData.attributes.submission || {};

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await submitForm({}, endpoint, method,);
    };


    if(!contactData || !contactData.attributes) return null;

    const getFormFields = () => {
      return contactData.attributes.fields.map((field: TextFieldProps) => {
        return (
          <TextField key={field.name} field={field} />
        );
      });
    };

    return(
        <section id="contact-form" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-md">
            <Typography as="h2" className="text-3xl font-bold text-center mb-8">Contact Us</Typography>

            <form
              onSubmit={handleFormSubmit}
              method="POST"
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              {getFormFields()}
              <Button type="submit" className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300">
                Send Message
              </Button>
            </form>

            <Typography
              id="formSuccess"
              className="hidden mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
            >
              {contactData.attributes.submission.successMessage}
            </Typography>

            <Typography
              id="formError"
              className="hidden mt-4 p-4 bg-red-100 text-red-700 rounded-lg"
            >
              {contactData.attributes.submission.errorMessage}
            </Typography>
          </div>
      </section>
    )
};

export default ContactsForm;