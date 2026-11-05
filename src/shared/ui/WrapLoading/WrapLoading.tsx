import './wrapLoading.scss'

interface WrapLoadingProps {
  className?: string;
  children: React.ReactNode
}

function WrapLoading({
  className = '',
  children
}: WrapLoadingProps): React.JSX.Element {
  const wrapLoading = 'wrap-loading'

  return (
    <div className={`${wrapLoading} ${className}`}>
      {children}
    </div>
  );
}

export default WrapLoading;