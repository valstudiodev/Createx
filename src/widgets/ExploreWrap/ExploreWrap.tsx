import './exploreWrap.scss';

interface ExploreWrapProps {
  className?: string;
  title: string;
  actions: React.ReactNode;
}

function ExploreWrap({
  className = '',
  title,
  actions
}: ExploreWrapProps): React.JSX.Element {
  const exploreWrap = 'explore-wrap'

  return (
    <div className={`${exploreWrap} ${className}`}>
      <h3 className={`${exploreWrap}__title`}>
        {title}
      </h3>
      {actions}
    </div>
  );
}

export default ExploreWrap;