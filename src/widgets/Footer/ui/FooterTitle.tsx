interface FooterTitleProps {
  children: React.ReactNode;
  className?: string;
}

function FooterTitle({
  children,
  className = ''
}: FooterTitleProps): React.JSX.Element {
  const footerTitle = 'footer-title'
  return (
    <h3 className={`${footerTitle} ${className}`}>
      {children}
    </h3>
  );
}

export default FooterTitle;