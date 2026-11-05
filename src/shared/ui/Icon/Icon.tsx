
interface IconProps {
  name: string;
  className?: string;
}

function Icon({
  name,
  className = ''
}: IconProps) {
  return (
    <span
      className={`icon ${name} ${className}`}
      aria-hidden='true'
    ></span>
  );
}

export default Icon;