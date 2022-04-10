import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitchProps } from './LanguageSwitch.props'
import cn from 'classnames'

import styles from './LanguageSwitch.module.scss'

const LanguageSwitch = ({ className, ...props }: LanguageSwitchProps) => {
  const { i18n } = useTranslation()

  const handleLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <select
      className={cn(styles.select, className)}
      value={i18n.language}
      onChange={handleLanguage}
      {...props}
    >
      <option className={styles.option} value="ua" style={{ fontFamily: 'sans-serif' }}>
        ua
      </option>
      <option className={styles.option} value="en" style={{ fontFamily: 'sans-serif' }}>
        en
      </option>
    </select>
  )
}

export default LanguageSwitch
