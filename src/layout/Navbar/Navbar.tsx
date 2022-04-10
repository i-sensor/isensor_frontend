import { Link } from 'react-router-dom'
import { useModal } from '../../hooks/useModal'
import { CustomLink, Backdrop } from '../../components/UI'
import { ThemeSwitch, BentoMenu, LanguageSwitch } from '../../components'
import { ReactComponent as Logo } from './logo.svg'
import { useTranslation } from 'react-i18next'
import { useScrollLock } from '../../hooks/useScrollLock'

import styles from './Navbar.module.scss'

const Navbar = () => {
  const [isOpened, handleSidenav] = useModal()
  const { t } = useTranslation()
  const { lockScroll, unlockScroll } = useScrollLock()

  isOpened ? lockScroll() : unlockScroll()

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <CustomLink to="/">{t('navbar.home')}</CustomLink>
            </li>
            <li className={styles.listItem}>
              <CustomLink to="/information">{t('navbar.information')}</CustomLink>
            </li>
          </ul>
          <BentoMenu className={styles.bentoMenu} onClick={handleSidenav} />
          <Link className={styles.logo} to="/">
            <Logo />
          </Link>
          <div className={styles.settings}>
            <LanguageSwitch className={styles.languageSwitch} />
            <ThemeSwitch className={styles.switch} />
          </div>
        </nav>
      </header>
      <Backdrop className={styles.content} isOpened={isOpened} handleClose={handleSidenav}>
        <nav className={styles.navMobile}>
          <LanguageSwitch className={styles.languageSwitchMobile} />
          <ul className={styles.listMobile}>
            <li className={styles.listItemMobile}>
              <CustomLink onClick={handleSidenav} to="/">
                {t('navbar.home')}
              </CustomLink>
            </li>
            <li className={styles.listItemMobile}>
              <CustomLink onClick={handleSidenav} to="/information">
                {t('navbar.information')}
              </CustomLink>
            </li>
          </ul>
        </nav>
      </Backdrop>
    </>
  )
}

export default Navbar
