import { useTranslation } from "react-i18next";
import FooterTitle from "./FooterTitle";

interface FooterNewsletterProps {
  className?: string
}

function FooterNewsletter({
  className = ''
}: FooterNewsletterProps): React.JSX.Element {
  const footerNewsletter = 'footer-newsletter'

  const { t } = useTranslation()

  return (
    <div className={`${footerNewsletter} ${className}`}>
      <FooterTitle>
        {t('footer.newsletter.title')}
      </FooterTitle>
      {/* form */}
      <p className={`${footerNewsletter}__text`}>
        {t('footer.newsletter.description')}
      </p>
    </div>
  );
}

export default FooterNewsletter;