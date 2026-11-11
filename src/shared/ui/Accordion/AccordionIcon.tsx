import './accordion.scss';

interface AccordionIconProps {
  isOpen: boolean;
  className?: string;
}

function AccordionIcon({
  isOpen,
  className = ''
}: AccordionIconProps): React.JSX.Element {
  const accordionIcon = 'accordion-icon'

  const mixedStyles = [
    accordionIcon,
    className,
    `${isOpen ? `${accordionIcon}--active` : ''}`
  ].filter(Boolean).join(' ')

  return (
    <span
      aria-hidden='true'
      className={mixedStyles}>
      <span className={`${accordionIcon}__line ${accordionIcon}__line--hor`}></span>
      <span className={`${accordionIcon}__line ${accordionIcon}__line--vert`}></span>
    </span>
  );
}

export default AccordionIcon;