export type TextFieldProps = {
    type: 'text' | 'email' | 'textarea';
    name: string;
    label: string;
    validation?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
    }
    styling?: {
        className?: string;
        placeholder?: string;
    }
};

const TextField: React.FC<{field: TextFieldProps}> = ({ field }) => {
    const { type, name, label, styling } = field;

    return (
         <div className="mb-6" key={name}>
            <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
              {label}
            </label>
            {type === 'textarea' ? (
              <textarea
                required={field.validation?.required}
                minLength={field.validation?.minLength}
                maxLength={field.validation?.maxLength}
                id={name}
                name={name}
                rows={4}
                placeholder={styling?.placeholder}
                className={`${styling?.className || 'form-input'} w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              ></textarea>
            ) : (
              <input
                type={type}
                id={name}
                name={name}
                required={field.validation?.required}
                minLength={field.validation?.minLength}
                maxLength={field.validation?.maxLength}
                placeholder={styling?.placeholder}
                className={`${styling?.className || 'form-input'} w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 `}
              />
            )}
          </div>
        
    )
};

export default TextField;