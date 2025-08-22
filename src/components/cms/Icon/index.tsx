type IconProps = {
  path: string;
  size?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ path, size = 24, className = '', ...props }) =>  {
  return (
    <svg
      width={size}
      height={size}
      className={`fill-current ${className}`}
      viewBox="0 0 24 24"
      {...props}
    >
      <use href={path} />
    </svg>
  )
}

export default Icon