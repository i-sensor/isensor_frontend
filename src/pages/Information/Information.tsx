import { ReactComponent as GithubIcon } from './github.svg'

import styles from './Information.module.scss'

const Information = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>Open source project</h1>
          <div className={styles.divider} />
          <p className={styles.shortInfo}>
            How this works:
            <br />
            <br />
            Data are sent via arduino to NodeJS server where it is being handled and stored in MySQL
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>Github links and links to project are here</h2>
          <div className={styles.divider} />
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="https://github.com/i-sensor" target="_blank">
                <GithubIcon className={styles.icon} />
                Github organization
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Information
