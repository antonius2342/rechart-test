'use client'

import DynamicTable from '@/components/chart/DynamicTable';
import LineChartComponent from '@/components/chart/Linechart';
import React, { useState } from 'react'

export default function Linechart () {
    const [tableData, setTableData] = useState<{ x: string; y: number }[]>([
        { x: 'Label 1', y: 0 },
      ]);
  return (
    <div className='container mx-auto text-center text-black '>
        <h1>lineChart</h1>
    <DynamicTable data={tableData} setData={setTableData} />
    <div className="mt-8">
      <LineChartComponent data={tableData} />
    </div>
    </div>
  )
}

