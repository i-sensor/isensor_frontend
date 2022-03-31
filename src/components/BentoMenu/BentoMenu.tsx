import { BentoMenuProps } from './BentoMenu.props'
import cn from 'classnames'

import styles from './BentoMenu.module.scss'

const BentoMenu = ({ className, ...props }: BentoMenuProps) => {
  return (
    <button
      className={cn(styles.button, className)}
      type="button"
      aria-label="Open sidenav menu"
      {...props}
    >
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </button>
  )
}

export default BentoMenu
