import styles from './Information.module.scss'

const Information = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Open source project</h1>
          <h2 className={styles.shortInfo}>
            How this works:
            <br />
            <br />
            Data are sent via arduino to NodeJS server where it is being handled and stored in MySQL
          </h2>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2>Github links and links to project are here</h2>
        </div>
      </div>
    </section>
  )
}

export default Information
