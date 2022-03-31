import { Link, useMatch } from 'react-router-dom'
import { CustomLinkProps } from './CustomLink.props'
import cn from 'classnames'

import styles from './CustomLink.module.scss'

const CustomLink = ({ children, to, ...props }: CustomLinkProps) => {
  const match = useMatch(to)

  return (
    <Link className={cn({ [styles.active]: match })} to={to} {...props}>
      {children}
    </Link>
  )
}

export default CustomLink
