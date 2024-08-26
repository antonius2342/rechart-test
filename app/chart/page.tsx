import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='container text-3xl text-center p-5'>
            Pick Charts that you prefer
            <ul>
                <li className='flex flex-col text-sm gap p-2 gap-6'>
                    <Link href={'/chart/linechart'}>Line chart</Link>
                    <Link href={'/chart/barchart'}>Bar chart</Link>
                    {/* <Link href={'/chart/areachart'}>Area Chart</Link>
                    <Link href={'/chart/composedchart'}>Composed Chart</Link>
                    <Link href={'/chart/linechart'}>Scatter Chart</Link>
                    <Link href={'/chart/linechart'}>Pie chart</Link>
                    <Link href={'/chart/linechart'}>Radar Chart</Link>
                    <Link href={'/chart/linechart'}>Tree Map</Link>
                    <Link href={'/chart/linechart'}>Gantt Chart</Link> */}
                </li>
            </ul>
        </div>
    )
}
