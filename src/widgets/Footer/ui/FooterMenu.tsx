import { useTranslation } from "react-i18next";
import { footerColums } from "../model/footer.data";
import FooterColumn from "./FooterColumn";
import '../styles/footer.scss';

interface FooterMenuProps {
  className?: string;
}

function FooterMenu({
  className = ''
}: FooterMenuProps): React.JSX.Element {
  const footerMenu = 'footer-menu'

  const { t } = useTranslation()

  return (
    <div className={`${footerMenu} ${className}`}>
      {footerColums.map((column) => (
        <FooterColumn
          title={t(column.title)}
          items={column.items}
          className={`${footerMenu}__column`}
        />
      ))}
    </div>
  );
}

export default FooterMenu;