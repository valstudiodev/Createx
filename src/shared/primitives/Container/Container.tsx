interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: number | string,
}

function Container({
  // maxWidth = 1230,
  className = '',
  children,
  ...props
}: ContainerProps): React.JSX.Element {
  return (
    <div
      {...props}
      className={`${className}`}
      style={{ ...props.style }}
    >
      {children}
    </div>
  );
}

export default Container;