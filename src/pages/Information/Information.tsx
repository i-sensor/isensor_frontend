import { ReactComponent as GithubIcon } from './github.svg'
import { useTranslation } from 'react-i18next'

import styles from './Information.module.scss'

const Information = () => {
  const { t } = useTranslation()

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>{t('information.heading_h1')}</h1>
          <div className={styles.divider} />
          <p className={styles.shortInfo}>
            {t('information.short_info.describer')}
            <br />
            <br />
            {t('information.short_info.main')}
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>{t('information.heading_h2')}</h2>
          <div className={styles.divider} />
          <ul className={styles.list}>
            <li>
              <a
                className={styles.link}
                href="https://github.com/i-sensor"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                <GithubIcon className={styles.icon} />
                {t('information.organization')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Information
