import { ModalHeaderProps } from "../model/types";
import '../model/modalStyles.scss';

export default function ModalHeader({ title, text }: ModalHeaderProps): React.JSX.Element {
  const modalHeader = 'modal-header'
  return (
    <div className={`${modalHeader}`}>
      <h2 className={`${modalHeader}__title`}>
        {title}
      </h2>
      {text && (
        <p className={`${modalHeader}__text`}>
          {text}
        </p>
      )}
    </div>
  )
}