import { useTranslation } from "react-i18next";
import FooterTitle from "./FooterTitle";
import { footerContactsData } from "../model/footer.data";

function FooterContacts(): React.JSX.Element {
  const footerContacts = 'footer-contacts'

  const { t } = useTranslation()

  return (
    <div className={footerContacts}>
      <FooterTitle>
        {t('footer.contactUs.title')}
      </FooterTitle>
      <ul className={`${footerContacts}__list`}>
        {footerContactsData.map(({ label, value, href }) => (
          <li
            className={`${footerContacts}__item`}
            key={value}
          >
            <a
              className={`${footerContacts}__link`}
              href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterContacts;