import Button from "@/components/UI/Button";
import TextField, { TTextField } from "@/components/UI/TextField";
import Typography from "@/components/UI/Typography";
import { useCMS } from "@/contexts/CmsContext";
import { useSubmitForm } from "@/hooks/submitForm.hook";
import { useEffect, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { createContactSchema } from "./helpers/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactsFormSection } from "./types";

interface Inputs {
  [key: string]: string;
}

const ContactsForm: React.FC = () => {
    const { getSectionById } = useCMS();
    const contactData = getSectionById('contact-form') as ContactsFormSection;

    const { submitForm } = useSubmitForm();

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

      const schema = useMemo(() => {
        if(contactData) {
          return createContactSchema(contactData.attributes.fields);
        } 
        return null;
      },[contactData]
    );

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm<Inputs>({
      resolver: schema ? zodResolver(schema) : undefined
    })

    useEffect(() => {
      if(showSuccessMessage) {
        reset();
      }
    }, [showSuccessMessage, reset]);

    // I want to remove feedback messages when user starts typing
    useEffect(() => {
      if (showSuccessMessage || showErrorMessage) {
        const handleInput = () => {
          setShowSuccessMessage(false);
          setShowErrorMessage(false);
        };

        // Add event listeners to all form inputs
        const form = document.querySelector('#contact-form form');
        if (form) {
          const inputs = form.querySelectorAll('input, textarea');
          inputs.forEach(input => {
            input.addEventListener('input', handleInput);
          });

          return () => {
            inputs.forEach(input => {
              input.removeEventListener('input', handleInput);
            });
          };
        }
      }
    }, [showSuccessMessage, showErrorMessage]);

    if (!contactData || !contactData.attributes) {
        return null; 
    }
    

    const { endpoint, method } = contactData.attributes.submission;

    const handleFormSubmit: SubmitHandler<Inputs> = async (data) => {
      const { fullName, email, message } = data;
      try {
        await submitForm({ fullName, email, message }, endpoint, method);
        setShowSuccessMessage(true);
        setShowErrorMessage(false);
      } catch (error) {
        console.error("Form submission error:", error);
        setShowErrorMessage(true);
        setShowSuccessMessage(false);
      }
    };

    const getFormFields = () => {
      return contactData.attributes.fields.map((field: TTextField) => {
        return (
          <TextField key={field.name} field={field} register={register} errors={errors} />
        );
      });
    };

    return(
        <section id="contact-form" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-md">
            <Typography as="h2" className="text-3xl font-bold text-center mb-8">Contact Us</Typography>

            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              method="POST"
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              noValidate
            >
                {getFormFields()}

                <Button 
                type="submit" 
                className={`mt-6 w-full font-medium py-3 rounded-lg transition duration-300 ${
                  isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
                }`}
                >
                {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>

            {showSuccessMessage && 
              <Typography
                id="formSuccess"
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
              >
                {contactData.attributes.submission.successMessage}
              </Typography>
            }

            {showErrorMessage && 
              <Typography
                id="formError"
                className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg"
              >
                {contactData.attributes.submission.errorMessage}
              </Typography>
            }
          </div>
      </section>
    )
};

export default ContactsForm;