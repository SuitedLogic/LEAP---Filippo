type LinkProps = {
    href: string;
    children?: React.ReactNode;
    className?: string;
};

const Link: React.FC<LinkProps> = ({ href, children, className }) => {
    return (
     <a
        href={href}
        className={`text-gray-400 hover:text-white transition duration-300 ${className}`}
        >
            {children}
        </a>
    );
}

export default Link;