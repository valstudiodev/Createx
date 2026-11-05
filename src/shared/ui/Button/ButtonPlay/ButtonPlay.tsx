import './buttonPlay.scss';

interface ButtonPlayProps {
  className?: string;
}

function ButtonPlay({
  className = ''
}: ButtonPlayProps): React.JSX.Element {
  const buttonPlay = 'button-play'
  return (
    <button
      type='button'
      className={`${buttonPlay} ${className}`}
    >
      <div className={`${buttonPlay}__wrap`}>
        <span
          aria-hidden='true'
          className={`${buttonPlay}__icon ${buttonPlay}__icon--icon-circle-play`}>
        </span>
      </div>
      <span className={`${buttonPlay}__label`}>
        Play showreel
      </span>
    </button>
  );
}

export default ButtonPlay;