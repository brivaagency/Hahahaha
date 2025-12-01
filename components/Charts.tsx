import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export const AssetPieChart = () => {
  const data = [
    { name: '부동산/시설', value: 12, color: '#065f46' }, // emerald-800
    { name: '가축/기계', value: 3, color: '#10b981' },   // emerald-500
    { name: '금융/기타', value: 3, color: '#6ee7b7' },   // emerald-300
  ];

  const totalAsset = data.reduce((acc, cur) => acc + cur.value, 0);

  // Custom Legend displayed as cards below the chart
  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <div className="grid grid-cols-3 gap-2 mt-4 w-full px-2">
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex flex-col items-center p-2 bg-stone-50 rounded-lg border border-stone-100 shadow-sm">
            <div className="flex items-center gap-1 mb-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-xs text-stone-500 font-medium whitespace-nowrap">{entry.payload.name}</span>
            </div>
            <span className="text-lg font-bold text-stone-800">{data[index].value}억</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Increased height significantly to h-72 (approx 18rem/288px) to fix clipping */}
      <div className="relative w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 20, bottom: 20 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ color: '#374151', fontSize: '14px', fontWeight: 'bold' }}
              formatter={(value) => `${value}억`} 
            />
            <Legend content={renderLegend} verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text - Adjusted position */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[200%] text-center pointer-events-none">
          <div className="text-xs text-stone-400 font-medium">총 자산</div>
          <div className="text-2xl font-black text-stone-800 tracking-tight">{totalAsset}억</div>
        </div>
      </div>
      
      <div className="w-full text-right px-4">
         <span className="text-[10px] text-stone-400">* 부채 차감 전 추정액</span>
      </div>
    </div>
  );
};