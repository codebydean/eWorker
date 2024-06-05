import * as React from 'react'
import { LineChart } from '@mui/x-charts'

const yearA = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const yearB = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Technology',
    'Education',
    'Agriculture',
    'Retail',
    'Health Care',
    'Construction',
    'Tourism',
    'Finance',
]

export default function JobChart(){
    return(
        <LineChart
            width={700}
            height={200}
            series={[
                {data: yearA, label:'2024'},
                {data: yearB, label:'2023'}
            ]}
            xAxis={[{scaleType:'point', data: xLabels}]}
        />
    )
}