import { Link } from 'react-router-dom'
import { useModal } from '../../hooks/useModal'
import { CustomLink, Backdrop } from '../../components/UI'
import { ThemeSwitch, BentoMenu } from '../../components'
import { ReactComponent as Logo } from './logo.svg'

import styles from './Navbar.module.scss'

const Navbar = () => {
  const [isOpened, handleSidenav] = useModal()

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li className={styles.listItem}>
              <CustomLink to="/information">Information</CustomLink>
            </li>
          </ul>
          <BentoMenu className={styles.bentoMenu} onClick={handleSidenav} />
          <Link className={styles.logo} to="/">
            <Logo />
          </Link>
          <ThemeSwitch className={styles.switch} />
        </nav>
      </header>
      <Backdrop className={styles.content} isOpened={isOpened} handleClose={handleSidenav}>
        <nav className={styles.navMobile}>
          <ul className={styles.listMobile}>
            <li className={styles.listItemMobile}>
              <CustomLink onClick={handleSidenav} to="/">
                Home
              </CustomLink>
            </li>
            <li className={styles.listItemMobile}>
              <CustomLink onClick={handleSidenav} to="/information">
                Information
              </CustomLink>
            </li>
          </ul>
        </nav>
      </Backdrop>
    </>
  )
}

export default Navbar
