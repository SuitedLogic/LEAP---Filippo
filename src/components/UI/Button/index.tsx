type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};


const Button: React.FC<ButtonProps> = ({ type, children, className, onClick }) => {
    return (
        <button type={type} onClick={onClick} className={`mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 cursor-pointer ${className}`}>
            {children}
        </button>
    )
};

export default Button;