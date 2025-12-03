import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, Label } from 'recharts';

export const AssetPieChart = () => {
  const data = [
    { name: '부동산/시설', value: 12, color: '#065f46' }, // emerald-800
    { name: '가축/기계', value: 3, color: '#10b981' },   // emerald-500
    { name: '금융/기타', value: 3, color: '#6ee7b7' },   // emerald-300
  ];

  const totalAsset = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Chart Area - Reduced height as legend is now external */}
      <div className="relative w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={75}
              paddingAngle={3}
              dataKey="value"
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
              {/* Center Labels */}
              <Label
                value={totalAsset + "억"}
                position="center"
                className="fill-stone-800 font-black text-2xl tracking-tight"
                dy={10}
              />
              <Label
                value="총 자산"
                position="center"
                className="fill-stone-400 text-xs font-medium"
                dy={-15}
              />
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ color: '#374151', fontSize: '14px', fontWeight: 'bold' }}
              formatter={(value) => `${value}억`} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* External Custom Legend to prevent overlap */}
      <div className="flex flex-wrap justify-center gap-2 mt-1 w-full">
        {data.map((entry, index) => (
          <div key={`item-${index}`} className="flex flex-col items-center p-2 bg-stone-50 rounded-lg border border-stone-100 shadow-sm min-w-[60px] flex-1">
            <div className="flex items-center gap-1 mb-1 justify-center w-full">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
              <span className="text-[10px] text-stone-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis">{entry.name}</span>
            </div>
            <span className="text-base font-bold text-stone-800 whitespace-nowrap">{entry.value}억</span>
          </div>
        ))}
      </div>
      
      <div className="w-full text-right mt-2 pr-2">
         <span className="text-[10px] text-stone-400">* 부채 차감 전 추정액</span>
      </div>
    </div>
  );
};