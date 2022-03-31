import ReactDOM from 'react-dom'
import { BackdropProps } from './Backdrop.props'
import cn from 'classnames'

import styles from './Backdrop.module.scss'

const Backdrop = ({ handleClose, isOpened, children, className }: BackdropProps) => {
  if (!isOpened) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      <div className={styles.backdrop} onClick={handleClose} />
      <div className={cn(styles.content, className)}>{children}</div>
    </>,
    document.body,
  )
}

export default Backdrop
