import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import styles from './Home.module.scss'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Temperature from sensors',
    },
  },
}

const labels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data1 = {
  labels: labels1,
  datasets: [
    {
      label: 'Temperature',
      data: [4, 17, -3, 4, 8, 10, 10],
      borderColor: '#ff8aae',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Humidity from sensors',
    },
  },
}

const labels2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data2 = {
  labels: labels2,
  datasets: [
    {
      label: 'Humidity',
      data: [4, 45, 47, 50, 55, 50],
      borderColor: '#9ADCFF',
      backgroundColor: '#42C2FF',
    },
  ],
}

const Home = () => {
  return (
    <section>
      <div className={styles.container}>
        <Line className={styles.canvas} options={options1} data={data1} redraw />
      </div>
      <div className={styles.container}>
        <Line className={styles.canvas} options={options2} data={data2} redraw />
      </div>
    </section>
  )
}

export default Home
