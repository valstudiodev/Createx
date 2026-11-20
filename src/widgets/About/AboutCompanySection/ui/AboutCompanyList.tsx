import { companyItems } from "../data/aboutCompany.data";

interface AboutCompanyListProrps {
  className?: string;
}

function AboutCompanyList({
  className = ''
}: AboutCompanyListProrps): React.JSX.Element {
  const aboutCompanyList = 'about-company-list'
  return (
    <ul className={`${aboutCompanyList} ${className}`}>
      {companyItems.map((item) => (
        <li
          key={item.id}
          className={`${aboutCompanyList}__item`}
        >
          <img
            className={`${aboutCompanyList}__image`}
            src={item.icon} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default AboutCompanyList;