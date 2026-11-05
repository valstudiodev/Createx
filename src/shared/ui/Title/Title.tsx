import './title.scss';

export type TitleTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'div'

export type TitleSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type TitleVariant = 'left' | 'centered' | 'right'


export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: TitleTag;
  size?: TitleSize;
  label?: string;
  children: React.ReactNode;
  variant?: TitleVariant;
  className?: string;
}

function Title({
  as: Component = 'h2',
  size,
  variant = 'left',
  label,
  children,
  className = '',
  ...props
}: TitleProps) {
  const clTitle = 'title'

  const visualSize = size || (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(Component) ? Component : 'h2');

  const combinedClasses = [
    clTitle,
    `${clTitle}--${visualSize}`,
    `${clTitle}--${variant}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={`${combinedClasses} ${clTitle}`} {...props}>
      {label && (
        <span className={`${clTitle}__label`}>
          {label}
        </span>
      )}
      <Component
        className={`${clTitle}__heading`} {...props}>
        {children}
      </Component>
    </div>
  );
}

export default Title;