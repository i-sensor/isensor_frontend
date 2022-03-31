import { useTheme } from '../../hooks/useTheme'
import { ReactComponent as LightThemeIcon } from './light.svg'
import { ReactComponent as DarkThemeIcon } from './dark.svg'
import { ThemeSwitchProps } from './ThemeSwitch.props'
import cn from 'classnames'

import styles from './ThemeSwitch.module.scss'

const ThemeSwitch = ({ className, ...props }: ThemeSwitchProps) => {
  const { theme, changeTheme } = useTheme()

  const onChangeTheme = () => {
    changeTheme && changeTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      className={cn(styles.switch, className)}
      type="button"
      aria-label="Switch theme color"
      onClick={onChangeTheme}
      {...props}
    >
      {theme === 'dark' ? <LightThemeIcon /> : <DarkThemeIcon />}
    </button>
  )
}

export default ThemeSwitch
