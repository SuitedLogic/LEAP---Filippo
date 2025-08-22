type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    className?: string;
    onClick?: () => void; 
    disabled?: boolean;
};


const Button: React.FC<ButtonProps> = ({ type, disabled, children, className, onClick }) => {
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={className}>
            {children}
        </button>
    )
};

export default Button;