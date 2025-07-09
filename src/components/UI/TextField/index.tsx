import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

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

type TextFieldProps<T extends FieldValues> = {
  field: TTextField;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
}

const TextField = <T extends FieldValues>({ field, register, errors }: TextFieldProps<T>) => {
    const { type, name, label, styling } = field;

    return (
         <div className="mb-6" key={name}>
            <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
              {label}
            </label>
           {type === 'textarea' ? (
              <textarea
                {...register(name as Path<T>)}
                id={name}
                rows={4}
                placeholder={styling?.placeholder}
                className={`${styling?.className || 'form-input'} w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            ) : (
              <input
                {...register(name as Path<T>)}
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