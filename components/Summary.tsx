import React from 'react';
import { PLANNER } from '../types';
import { 
  CheckSquare, 
  ArrowRight,
  Phone,
  FileText
} from 'lucide-react';

export const Summary = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="a4-page print-break-after">
        
        {/* Header */}
        <div className="border-b-4 border-emerald-600 pb-4 mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-stone-900">양돈농가 가업승계·절세 핵심 요약</h1>
            <p className="text-sm text-stone-500 mt-1">플래너 상담용 요약 스크립트</p>
          </div>
          <div className="text-right">
             <div className="font-bold text-emerald-700">{PLANNER.company}</div>
             <div className="text-sm">{PLANNER.name} 플래너</div>
          </div>
        </div>

        {/* 1. Status */}
        <div className="mb-6">
          <h2 className="text-lg font-bold bg-stone-100 px-3 py-1 inline-block rounded mb-3">1. 현황 및 핵심 고민</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white border border-stone-200 p-3 rounded">
              <span className="block font-bold text-stone-700 mb-1">자산 구성 (18억)</span>
              토지/돈사 12억 / 돼지/시설 3억 / 금융 3억<br/>
              <span className="text-red-500 text-xs">→ 유동성 부족 (대부분 농장 자산)</span>
            </div>
            <div className="bg-white border border-stone-200 p-3 rounded">
              <span className="block font-bold text-stone-700 mb-1">가족 니즈</span>
              아들: 양돈 농장 100% 승계 희망<br/>
              딸: 공평한 수준의 현금 보상
            </div>
          </div>
        </div>

        {/* 2. Solutions */}
        <div className="mb-6">
          <h2 className="text-lg font-bold bg-emerald-100 text-emerald-900 px-3 py-1 inline-block rounded mb-3">2. 맞춤형 솔루션</h2>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 border-l-4 border-emerald-500 pl-3 py-1">
              <div className="min-w-[4rem] font-bold text-emerald-700 pt-1">Solution 1</div>
              <div>
                <p className="font-bold text-stone-800">종신보험 5억 플랜</p>
                <p className="text-sm text-stone-600">아들(2억) 상속세/운영비 + 딸(3억) 현금 상속 재원 동시 마련</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-l-4 border-stone-400 pl-3 py-1">
              <div className="min-w-[4rem] font-bold text-stone-600 pt-1">Solution 2</div>
              <div>
                <p className="font-bold text-stone-800">생전 분할 증여</p>
                <p className="text-sm text-stone-600">현재부터 농지/돈사 일부 증여 → 10년 후 2차 증여 (상속 자산 축소)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-l-4 border-stone-400 pl-3 py-1">
              <div className="min-w-[4rem] font-bold text-stone-600 pt-1">Solution 3</div>
              <div>
                <p className="font-bold text-stone-800">법인 전환 & CEO 플랜</p>
                <p className="text-sm text-stone-600">지분 구조 활용(아들 경영/딸 지분) + 법인 보험으로 리스크 헷지</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Process */}
        <div className="mb-8">
           <h2 className="text-lg font-bold bg-stone-100 px-3 py-1 inline-block rounded mb-4">3. 진행 프로세스</h2>
           <div className="flex justify-between items-center text-xs text-center px-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">1</div>
                <span>현황 진단</span>
              </div>
              <ArrowRight className="text-stone-300" size={16}/>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">2</div>
                <span>세금 시뮬레이션</span>
              </div>
              <ArrowRight className="text-stone-300" size={16}/>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">3</div>
                <span>보험 설계</span>
              </div>
              <ArrowRight className="text-stone-300" size={16}/>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">4</div>
                <span>증여 로드맵</span>
              </div>
              <ArrowRight className="text-stone-300" size={16}/>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-stone-500 text-white flex items-center justify-center font-bold">5</div>
                <span>실행 및 점검</span>
              </div>
           </div>
        </div>

        {/* Footer */}
        <div className="mt-auto bg-stone-50 p-4 border border-stone-200 rounded-lg flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 border border-emerald-200 shadow-sm">
            <Phone size={20} />
          </div>
          <div>
            <p className="text-xs text-stone-500">문의 및 상담</p>
            <p className="font-bold text-lg text-stone-800">{PLANNER.name} {PLANNER.position} <span className="text-emerald-600 ml-2">{PLANNER.phone}</span></p>
          </div>
        </div>

      </div>
    </div>
  );
};