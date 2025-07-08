import { FieldErrors, UseFormRegister } from "react-hook-form";

export type TTextField = {
    type: 'text' | 'email' | 'textarea';
    name: string;
    label: string;
    validation?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        pattern?: string;
    }
    styling?: {
        className?: string;
        placeholder?: string;
    }
};

type TextFieldProps<T extends Record<string, any> = any> = {
  field: TTextField;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
}

const TextField: React.FC<TextFieldProps> = ({ field, register, errors }) => {
    const { type, name, label, styling } = field;

    return (
         <div className="mb-6" key={name}>
            <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
              {label}
            </label>
           {type === 'textarea' ? (
              <textarea
                {...register(name)}
                id={name}
                rows={4}
                placeholder={styling?.placeholder}
                className={`${styling?.className || 'form-input'} w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            ) : (
              <input
                {...register(name)}
                type={type}
                id={name}
                placeholder={styling?.placeholder}
                className={`${styling?.className || 'form-input'} w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            )}
            {errors && errors[name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[name]?.message as string}
              </p>
            )}
          </div>
        
    )
};

export default TextField;