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
import { humidityOptions, pressureOptions, temperatureOptions, uvOptions } from './chart-options'

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

const Home = () => {
  const { data } = useFetch<IData[]>('https://isensor.herokuapp.com/data?limit=5')
  const [temperature, setTemperature] = useState<any>({})
  const [humidity, setHumidity] = useState<any>({})
  const [pressure, setPressure] = useState<any>({})
  const [uv, setUV] = useState<any>({})

  const transformValue = (valueName: keyof Omit<IData, 'id' | 'date'>) => {
    return data?.map(item => item[valueName])
  }

  const transformDate = useMemo(() => {
    return data?.map(dateItem =>
      new Date(dateItem['date'].slice(0, -1)).toLocaleDateString().split('.').slice(0, 2).join('.'),
    )
  }, [data])

  useEffect(() => {
    setTemperature({
      labels: transformDate,
      datasets: [
        {
          label: 'Temperature',
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
          label: 'Humidity',
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
          label: 'Pressure',
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
          label: 'UV',
          data: [0.3, 0.3, 0.7, 0.2],
          borderColor: '#9ADCFF',
          backgroundColor: '#42C2FF',
        },
      ],
    })
  }, [data])

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
        <Line className={styles.canvas} options={temperatureOptions} data={temperature} redraw />
      </div>
      <div className={styles.container}>
        <Line className={styles.canvas} options={humidityOptions} data={humidity} redraw />
      </div>
      <div className={styles.container}>
        <Line className={styles.canvas} options={pressureOptions} data={pressure} redraw />
      </div>
      <div className={styles.container}>
        <Bar options={uvOptions} data={uv} redraw />
      </div>
    </section>
  )
}

export default Home
