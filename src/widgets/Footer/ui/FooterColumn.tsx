import { Link } from "react-router";
import { FooterColumnData } from "../model/footer.types";
import FooterTitle from "./FooterTitle";
import { useTranslation } from "react-i18next";



function FooterColumn({
  title,
  items,
  className = ''
}: FooterColumnData): React.JSX.Element {
  const footerColumn = 'footer-column'

  const { t } = useTranslation()

  return (
    <div className={`${footerColumn} ${className}`}>
      <FooterTitle>
        {title}
      </FooterTitle>
      <ul className={`${footerColumn}__list`}>
        {items.map((item) => (
          <li
            className={`${footerColumn}__item`}
            key={item.label}
          >
            {item.type === 'link' ? (
              <Link
                to={item.to}
                className={`${footerColumn}__link`}
              >
                {t(item.label)}
              </Link>
            ) : (
              <a
                href={item.href}
                className={`${footerColumn}__link`}
              >
                {t(item.label)}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;