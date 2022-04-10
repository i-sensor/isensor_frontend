import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { useEffect, useMemo, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { Spinner } from '../../components/UI'
import cn from 'classnames'
import { useFetch } from '../../hooks/useFetch'
import { IData } from '../../interfaces/data.interface'
import { useTranslation } from 'react-i18next'

import styles from './Home.module.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
)

const options = {
  responsive: true,
}

const Home = () => {
  const { data } = useFetch<IData[]>('https://isensor.herokuapp.com/data?limit=5')
  const [temperature, setTemperature] = useState<any>({})
  const [humidity, setHumidity] = useState<any>({})
  const [pressure, setPressure] = useState<any>({})
  const [uv, setUV] = useState<any>({})
  const { t, i18n } = useTranslation()

  const transformValue = (valueName: keyof Omit<IData, 'id' | 'date'>) => {
    return data?.map(item => item[valueName])
  }

  const handleNumPrefix = (num: number) => (num < 10 ? `0${num}` : num)

  // const transformDate = useMemo(() => {
  //   return data?.map(dateItem =>
  //     new Date(dateItem['date'].slice(0, -1)).toLocaleDateString().split('.').slice(0, 2).join('.'),
  //   )
  // }, [data])

  const transformDate = useMemo(() => {
    return data?.map(dateItem => {
      const date = new Date(dateItem['date'].slice(0, -1))

      const minutes = date.getMinutes()
      const hours = date.getHours()
      const day = handleNumPrefix(date.getDate())
      const month = handleNumPrefix(date.getMonth() + 1)

      return `${day}.${month}/${hours}:${minutes}`
    })
  }, [data])

  useEffect(() => {
    setTemperature({
      labels: transformDate,
      datasets: [
        {
          label: t('charts.temperature.label'),
          data: transformValue('temperature'),
          borderColor: '#ff8aae',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    })

    setHumidity({
      labels: transformDate,
      datasets: [
        {
          label: t('charts.humidity.label'),
          data: transformValue('humidity'),
          borderColor: '#9ADCFF',
          backgroundColor: '#42C2FF',
        },
      ],
    })

    setPressure({
      labels: transformDate,
      datasets: [
        {
          label: t('charts.pressure.label'),
          data: transformValue('pressure'),
          borderColor: '#ff8aae',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    })

    setUV({
      labels: transformDate,
      datasets: [
        {
          label: t('charts.uv.label'),
          data: transformValue('uv'),
          borderColor: '#9ADCFF',
          backgroundColor: '#42C2FF',
        },
      ],
    })
  }, [data, i18n.language])

  if (!data) {
    return (
      <div className={cn(styles.container, styles.centered)}>
        <Spinner />
      </div>
    )
  }

  return (
    <section>
      <div className={styles.container}>
        <h2 className={cn(styles.centered, styles.title)}>{t('charts.temperature.title')}</h2>
        <Line className={styles.canvas} options={options} data={temperature} redraw />
      </div>
      <div className={styles.container}>
        <h2 className={cn(styles.centered, styles.title)}>{t('charts.humidity.title')}</h2>
        <Line className={styles.canvas} options={options} data={humidity} redraw />
      </div>
      <div className={styles.container}>
        <h2 className={cn(styles.centered, styles.title)}>{t('charts.pressure.title')}</h2>
        <Line className={styles.canvas} options={options} data={pressure} redraw />
      </div>
      <div className={styles.container}>
        <h2 className={cn(styles.centered, styles.title)}>{t('charts.uv.title')}</h2>
        <Bar options={options} data={uv} redraw />
      </div>
    </section>
  )
}

export default Home
