import './headline.scss';
import { Title } from "@/shared/ui";

interface HeadlineProps {
  className?: string;
  title: string;
  label: string;
  children: React.ReactNode;
}

function Headline({
  className = '',
  title,
  label,
  children
}: HeadlineProps): React.JSX.Element {
  const headline = 'headline'

  return (
    <div className={`${headline} ${className}`}>
      <Title
        className={`${headline}__title`}
        label={label}>
        {title}
      </Title>
      {children}
    </div>
  );
}

export default Headline;