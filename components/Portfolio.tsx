import React from 'react';
import { AssetPieChart } from './Charts';
import { PLANNER } from '../types';
import { 
  Tractor, 
  Users, 
  AlertTriangle, 
  Target, 
  ShieldCheck, 
  Coins, 
  ArrowRight, 
  Building, 
  CheckCircle2,
  Phone,
  Briefcase,
  ChevronDown
} from 'lucide-react';

// Reusable Page Wrapper
const A4Page: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`a4-page print-break-after ${className}`}>
    {children}
    {/* Footer for every page */}
    <div className="absolute bottom-4 left-0 w-full px-12 text-xs text-gray-400 flex justify-between items-center print:text-black">
      <span>나누리사업단 | {PLANNER.name} 플래너</span>
      <span>{PLANNER.phone}</span>
    </div>
  </div>
);

// Page 1: Cover
const CoverPage = () => (
  <A4Page className="justify-center items-center bg-emerald-900 text-white relative">
    <div className="absolute inset-0 opacity-20">
      <img 
        src="https://picsum.photos/1200/1600?grayscale" 
        alt="Farm Background" 
        className="w-full h-full object-cover" 
      />
    </div>
    <div className="z-10 text-center space-y-8 p-10 border-4 border-emerald-700/50 bg-emerald-900/80 backdrop-blur-sm rounded-xl max-w-2xl">
      <div className="space-y-4">
        <h2 className="text-xl font-medium tracking-widest text-emerald-300 uppercase">Proposal</h2>
        <h1 className="text-5xl font-bold leading-tight">
          젖소농가 가업승계<br/>
          <span className="text-3xl block mt-4 font-light">상속·증여·절세 종합설계</span>
        </h1>
        <div className="w-24 h-1 bg-emerald-500 mx-auto my-8"></div>
        <h3 className="text-2xl font-light">예시: OO목장 대표님 귀하</h3>
      </div>
      
      <div className="mt-20 text-left bg-white/10 p-6 rounded-lg border border-white/20">
        <p className="text-sm text-emerald-200 mb-1">Presented by</p>
        <p className="text-xl font-bold">{PLANNER.company}</p>
        <p className="text-lg">{PLANNER.position} <span className="font-bold">{PLANNER.name}</span></p>
        <p className="text-md mt-2 flex items-center gap-2">
          <Phone className="w-4 h-4" /> {PLANNER.phone}
        </p>
      </div>
    </div>
  </A4Page>
);

// Page 2: Diagnosis
const DiagnosisPage = () => (
  <A4Page>
    <h2 className="text-3xl font-bold text-emerald-900 mb-8 border-b-2 border-emerald-100 pb-4">
      01. 농장 현황 진단 및 고민
    </h2>

    <div className="grid grid-cols-2 gap-8 mb-8">
      {/* Family */}
      <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
        <h3 className="flex items-center gap-2 text-xl font-bold text-stone-800 mb-4">
          <Users className="text-emerald-600" /> 가족 구성 현황
        </h3>
        <ul className="space-y-3">
          <li className="flex justify-between border-b border-stone-200 pb-2">
            <span className="font-medium text-gray-600">아버지 (농장주)</span>
            <span className="font-bold">62세</span>
          </li>
          <li className="flex justify-between border-b border-stone-200 pb-2">
            <span className="font-medium text-gray-600">어머니 (배우자)</span>
            <span className="font-bold">60세</span>
          </li>
          <li className="flex justify-between border-b border-stone-200 pb-2 bg-emerald-50/50 -mx-2 px-2 rounded">
            <span className="font-medium text-emerald-800">아들 (후계농)</span>
            <div className="text-right">
              <span className="font-bold block">35세</span>
              <span className="text-xs text-emerald-600">농장 경영 참여</span>
            </div>
          </li>
          <li className="flex justify-between pt-2">
            <span className="font-medium text-gray-600">딸 (직장인)</span>
            <div className="text-right">
              <span className="font-bold block">32세</span>
              <span className="text-xs text-gray-500">타지역 거주</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Assets */}
      <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-center">
        <h3 className="flex items-center gap-2 text-xl font-bold text-stone-800 mb-4">
          <Tractor className="text-emerald-600" /> 자산 현황 (추정)
        </h3>
        <AssetPieChart />
      </div>
    </div>

    {/* Details Table */}
    <div className="mb-8">
       <table className="w-full text-sm text-left text-gray-600 border border-stone-200">
         <thead className="bg-stone-100 text-stone-800 font-bold">
           <tr>
             <th className="px-4 py-2">구분</th>
             <th className="px-4 py-2">내역 상세</th>
             <th className="px-4 py-2 text-right">평가액</th>
           </tr>
         </thead>
         <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-4 py-2 font-medium">부동산/시설</td>
              <td className="px-4 py-2">목장 부지, 축사, 사료창고</td>
              <td className="px-4 py-2 text-right">12억</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">가축/기계</td>
              <td className="px-4 py-2">젖소(80두), 육성우, 착유기 등</td>
              <td className="px-4 py-2 text-right">3억</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">금융/기타</td>
              <td className="px-4 py-2">예금, 현금, 농업법인 지분</td>
              <td className="px-4 py-2 text-right">3억</td>
            </tr>
            <tr className="bg-emerald-50 font-bold text-emerald-900">
              <td colSpan={2} className="px-4 py-2">순자산 (부채 3억 차감 후)</td>
              <td className="px-4 py-2 text-right">15억</td>
            </tr>
         </tbody>
       </table>
    </div>

    {/* Risks */}
    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
      <h3 className="flex items-center gap-2 text-xl font-bold text-red-800 mb-4">
        <AlertTriangle /> 대표님의 고민 및 예상 리스크
      </h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <p className="font-bold text-stone-700">대표님의 고민</p>
          <ul className="list-disc list-inside text-stone-600 space-y-1 text-sm">
            <li>아들에게 온전한 농장 승계 희망</li>
            <li>딸에게도 섭섭하지 않게 챙겨주고 싶음</li>
            <li>과도한 상속세로 인한 농장 매각 우려</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-bold text-red-700">발생 가능 리스크</p>
          <ul className="list-disc list-inside text-red-600 space-y-1 text-sm">
            <li>자산 15억: 상속세 발생 구간 진입</li>
            <li>현금 부족: <span className="underline decoration-red-300">세금 납부 위해 토지/소 급매 위험</span></li>
            <li>형제 갈등: 딸의 유류분 청구 등 분쟁 소지</li>
          </ul>
        </div>
      </div>
    </div>
  </A4Page>
);

// Page 3: Goals - REDESIGNED WITH RELATIVE/ABSOLUTE CONNECTIONS FOR PERFECTION
const GoalsPage = () => (
  <A4Page>
    <h2 className="text-3xl font-bold text-emerald-900 mb-8 border-b-2 border-emerald-100 pb-4">
      02. 설계 목표 및 전체 구조
    </h2>

    <div className="grid grid-cols-3 gap-6 mb-12">
      <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 mb-3 shadow-sm">
          <Tractor size={24} />
        </div>
        <h3 className="font-bold text-lg text-emerald-900 mb-2">Goal 1. 가업 승계</h3>
        <p className="text-xs text-stone-600">
          아들에게 농장 자산을<br/>
          100% 안정적 승계
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 mb-3 shadow-sm">
          <Coins size={24} />
        </div>
        <h3 className="font-bold text-lg text-blue-900 mb-2">Goal 2. 형평성 상속</h3>
        <p className="text-xs text-stone-600">
          딸에게 명확한<br/>
          현금 자산 상속
        </p>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-600 mb-3 shadow-sm">
          <ShieldCheck size={24} />
        </div>
        <h3 className="font-bold text-lg text-amber-900 mb-2">Goal 3. 세금 재원</h3>
        <p className="text-xs text-stone-600">
          상속세 납부 재원<br/>
          사전 준비 및 절세
        </p>
      </div>
    </div>

    {/* Tree Diagram - Robust Structure */}
    <div className="bg-white border-2 border-stone-200 rounded-2xl p-8 pb-12 flex flex-col items-center">
      <h3 className="text-xl font-bold text-center mb-8 bg-stone-100 inline-block px-6 py-2 rounded-full">
        전체 승계 구조도
      </h3>
      
      {/* 1. Top Node */}
      <div className="z-10 mb-0">
        <div className="w-36 h-36 bg-stone-800 text-white rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-stone-200">
          <span className="text-2xl font-bold">대표님</span>
          <span className="text-xs text-stone-300 mt-1">(자산 원천)</span>
        </div>
      </div>

      {/* Connector */}
      <div className="h-8 w-1 bg-stone-300"></div>

      {/* 2. Middle Node */}
      <div className="z-10 mb-0">
         <div className="bg-white border-2 border-stone-400 text-stone-700 px-8 py-3 rounded-full text-base font-bold shadow-md">
           솔루션 (보험 / 증여 / 법인)
         </div>
      </div>

      {/* Connector */}
      <div className="h-6 w-1 bg-stone-300"></div>

      {/* 3. Branching Area */}
      {/* This container uses absolute positioning for the 'bracket' line to ensure it perfectly hits the centers of the children columns */}
      <div className="relative w-full max-w-3xl">
        
        {/* The Bracket Line: connects left 25% to right 75% (centers of the two cols) */}
        <div className="absolute top-0 left-1/4 right-1/4 h-8 border-t-2 border-l-2 border-r-2 border-stone-300 rounded-t-xl z-0"></div>
        
        {/* Grid for Children */}
        <div className="grid grid-cols-2 gap-8 pt-8 w-full">
          
          {/* Son Column */}
          <div className="flex flex-col items-center relative z-10">
             <div className="text-stone-300 -mt-2 mb-1">
               <ChevronDown size={24} />
             </div>
             <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm text-center w-full h-full hover:bg-emerald-100 transition-colors">
                <span className="font-bold text-xl text-emerald-900 mb-3 block">아들 (후계자)</span>
                <div className="bg-white p-3 rounded-lg border border-emerald-100 mb-3 flex flex-col items-center justify-center gap-1">
                  <Tractor className="text-emerald-600" size={28} />
                  <div className="font-bold text-base text-stone-800">농장 (토지/시설)</div>
                </div>
                <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                  가업 승계 & 경영권
                </div>
             </div>
          </div>

          {/* Daughter Column */}
          <div className="flex flex-col items-center relative z-10">
             <div className="text-stone-300 -mt-2 mb-1">
               <ChevronDown size={24} />
             </div>
             <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm text-center w-full h-full hover:bg-blue-100 transition-colors">
                <span className="font-bold text-xl text-blue-900 mb-3 block">딸 (비경영)</span>
                <div className="bg-white p-3 rounded-lg border border-blue-100 mb-3 flex flex-col items-center justify-center gap-1">
                  <Coins className="text-blue-600" size={28} />
                  <div className="font-bold text-base text-stone-800">현금 자산 (보험금)</div>
                </div>
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                  경제적 형평성 확보
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  </A4Page>
);

// Page 4: Solution 1
const Solution1Page = () => (
  <A4Page>
    <div className="flex items-center gap-4 mb-8 border-b-2 border-emerald-100 pb-4">
      <h2 className="text-3xl font-bold text-emerald-900">03. 1차 솔루션</h2>
      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-bold">종신보험 플랜</span>
    </div>

    <div className="space-y-8">
      {/* Concept */}
      <div className="bg-stone-50 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-stone-800 mb-3">💡 기본 컨셉</h3>
        <p className="text-stone-600 leading-relaxed">
          대표님 명의의 종신보험을 활용하여 <strong>사망 시점에 즉시 현금(유동성)을 공급</strong>합니다. 
          이 현금은 아들에게는 상속세 납부 재원이 되고, 딸에게는 공평한 상속분이 됩니다.
        </p>
      </div>

      {/* Needs */}
      <div className="grid grid-cols-2 gap-6">
        <div className="border border-stone-200 rounded-xl p-5">
          <h4 className="font-bold text-stone-700 mb-2 flex items-center gap-2">
            <Target size={18} /> 필요 자금 추정
          </h4>
          <ul className="space-y-2 text-sm text-stone-600">
            <li className="flex justify-between">
              <span>아들 (상속세/운영비)</span>
              <span className="font-bold text-stone-900">약 2억</span>
            </li>
            <li className="flex justify-between">
              <span>딸 (현금 상속분)</span>
              <span className="font-bold text-stone-900">약 3억</span>
            </li>
            <li className="flex justify-between pt-2 border-t border-stone-200 mt-2">
              <span className="font-bold text-emerald-700">총 필요 보험금</span>
              <span className="font-bold text-emerald-700 text-lg">5억</span>
            </li>
          </ul>
        </div>

        <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
           <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
            <CheckCircle2 size={18} /> 설계 구조 예시
          </h4>
          <ul className="space-y-2 text-sm text-emerald-700">
            <li><strong>피보험자:</strong> 대표님 (62세)</li>
            <li><strong>상품종류:</strong> 종신보험</li>
            <li><strong>사망보험금:</strong> 5억원</li>
            <li><strong>납입기간:</strong> 10년납 또는 15년납</li>
          </ul>
        </div>
      </div>

      {/* Diagram */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-stone-800 mb-4 text-center">자금 흐름도 (Flow)</h3>
        <div className="flex flex-col items-center">
          
          <div className="w-64 bg-stone-800 text-white p-4 rounded-lg text-center shadow-md z-10 relative">
            <div className="font-bold text-lg">대표님 유고 시</div>
            <div className="text-sm opacity-80">사망보험금 5억 발생</div>
          </div>
          
          {/* Connector Down */}
          <div className="h-8 w-1 bg-emerald-300"></div>
          
          <div className="relative w-full max-w-2xl">
             {/* Fork Line: Left 25% to Right 75% */}
             <div className="absolute top-0 left-1/4 right-1/4 h-4 border-t-2 border-l-2 border-r-2 border-emerald-300 rounded-t-xl"></div>
             
             <div className="grid grid-cols-2 gap-8 pt-4 w-full">
                {/* Son Flow */}
                <div className="flex flex-col items-center">
                   <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-emerald-300 mb-1"></div>
                   <div className="bg-white border-2 border-emerald-500 p-5 rounded-xl text-center w-full shadow-sm">
                      <div className="font-bold text-xl text-emerald-800 mb-1">아들</div>
                      <div className="text-2xl font-black text-emerald-600 mb-2">2억</div>
                      <div className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded inline-block">
                        상속세 납부 & 운영자금
                      </div>
                    </div>
                </div>

                {/* Daughter Flow */}
                <div className="flex flex-col items-center">
                   <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-emerald-300 mb-1"></div>
                   <div className="bg-white border-2 border-blue-500 p-5 rounded-xl text-center w-full shadow-sm">
                      <div className="font-bold text-xl text-blue-800 mb-1">딸</div>
                      <div className="text-2xl font-black text-blue-600 mb-2">3억</div>
                      <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded inline-block">
                        현금 상속 (갈등 해소)
                      </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      <div className="bg-stone-100 p-4 rounded-lg mt-6 text-sm text-stone-600 text-center">
        * 수익자 지정은 계약 시 설정하거나, 유언 공증 등을 통해 사전에 법적 효력을 갖출 수 있습니다.
      </div>

    </div>
  </A4Page>
);

// Page 5: Solution 2 & 3
const Solution23Page = () => (
  <A4Page>
     <div className="flex items-center gap-4 mb-8 border-b-2 border-emerald-100 pb-4">
      <h2 className="text-3xl font-bold text-emerald-900">04. 2차 & 3차 솔루션</h2>
      <span className="bg-stone-200 text-stone-600 px-3 py-1 rounded-full text-sm font-bold">증여 / 법인</span>
    </div>

    {/* Section 2 */}
    <div className="mb-10">
      <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
        <div className="bg-emerald-600 text-white w-6 h-6 rounded flex items-center justify-center text-sm">2</div>
        생전 증여 (분할 증여 플랜)
      </h3>
      
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div className="bg-white border border-stone-200 p-5 rounded-xl shadow-sm">
          <h4 className="font-bold text-emerald-800 mb-2">Step 1. 사전 증여 (현재)</h4>
          <p className="text-sm text-stone-600 mb-2">
            농지/시설 중 일부(1~1.5억)를 아들에게 증여
          </p>
          <div className="text-xs text-blue-600 font-medium">
            → 아들의 책임감 고취 및 증여공제 활용
          </div>
        </div>
        <div className="bg-white border border-stone-200 p-5 rounded-xl shadow-sm">
          <h4 className="font-bold text-emerald-800 mb-2">Step 2. 추가 증여 (10년 후)</h4>
          <p className="text-sm text-stone-600 mb-2">
            증여재산 합산 배제 기간(10년) 경과 후 추가 증여
          </p>
          <div className="text-xs text-blue-600 font-medium">
            → 사망 시점 상속 자산 규모 축소 효과
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-4 items-start">
         <div className="min-w-fit mt-1">
           <Coins size={20} className="text-blue-600" />
         </div>
         <div>
           <div className="font-bold text-blue-900 text-sm">Plus Plan: 딸을 위한 저축</div>
           <p className="text-xs text-blue-700 mt-1">
             대표님/배우자 명의로 월 50~100만원 적립식 플랜 가입 → 향후 딸의 결혼자금이나 추가 현금 상속 재원으로 활용 (아들은 농장, 딸은 현금 원칙 강화)
           </p>
         </div>
      </div>
    </div>

    {/* Section 3 */}
    <div>
      <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
        <div className="bg-stone-600 text-white w-6 h-6 rounded flex items-center justify-center text-sm">3</div>
        농업 법인 활용 & 키맨(Key-Man) 보험
      </h3>
      
      <div className="flex gap-6 items-center">
         <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
            <h4 className="font-bold text-stone-700 mb-3 border-b pb-2">지분 승계 로드맵</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-500">현재</span>
                <span className="font-bold">대표님 100%</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-stone-400 h-full w-full"></div>
              </div>
              <div className="flex justify-center text-stone-400">▼</div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-500">미래</span>
                <span className="font-bold text-emerald-600">아들 80% / 딸 20%</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden flex">
                <div className="bg-emerald-500 h-full w-4/5"></div>
                <div className="bg-blue-400 h-full w-1/5"></div>
              </div>
            </div>
         </div>

         <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-5 h-full">
            <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <Building size={16}/> CEO 플랜 (키맨 보험)
            </h4>
            <ul className="text-sm text-amber-900 space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="mt-1 shrink-0" />
                <span>계약자/수익자: <strong>농업법인</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="mt-1 shrink-0" />
                <span>유고 시 법인으로 <strong>고액의 운영자금</strong> 유입</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="mt-1 shrink-0" />
                <span>법인 대출 상환 및 유족 보상 재원 활용</span>
              </li>
            </ul>
         </div>
      </div>
    </div>
  </A4Page>
);

// Page 6: Summary & Contact
const SummaryPage = () => (
  <A4Page>
    <div className="flex items-center gap-4 mb-8 border-b-2 border-emerald-100 pb-4">
      <h2 className="text-3xl font-bold text-emerald-900">05. 핵심 요약</h2>
    </div>

    <div className="bg-white border-l-4 border-emerald-500 p-6 shadow-sm mb-12">
      <h3 className="text-xl font-bold text-emerald-800 mb-6">최종 제안 4대 포인트</h3>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <div className="font-black text-2xl text-emerald-200">01</div>
          <div>
            <p className="font-bold text-lg text-stone-800">농장 사수 (매각 방지)</p>
            <p className="text-stone-600 text-sm">아들이 상속세 때문에 농장을 파는 일 없이 100% 승계</p>
          </div>
        </li>
        <li className="flex gap-4">
          <div className="font-black text-2xl text-emerald-200">02</div>
          <div>
            <p className="font-bold text-lg text-stone-800">확실한 형평성</p>
            <p className="text-stone-600 text-sm">딸에게 2~3억 수준의 현금 자산을 보장하여 분쟁 예방</p>
          </div>
        </li>
        <li className="flex gap-4">
          <div className="font-black text-2xl text-emerald-200">03</div>
          <div>
            <p className="font-bold text-lg text-stone-800">전문가 협업</p>
            <p className="text-stone-600 text-sm">세무사 제휴를 통한 합법적이고 정밀한 시뮬레이션</p>
          </div>
        </li>
        <li className="flex gap-4">
          <div className="font-black text-2xl text-emerald-200">04</div>
          <div>
            <p className="font-bold text-lg text-stone-800">종합 안전장치</p>
            <p className="text-stone-600 text-sm">종신보험 + 증여 + 법인 제도를 융합한 최적의 설계</p>
          </div>
        </li>
      </ol>
    </div>

    <div className="border-t border-stone-200 pt-8 mt-auto">
      <div className="flex gap-8 items-center bg-stone-800 text-white p-8 rounded-2xl">
        <div className="w-32 h-32 bg-stone-600 rounded-full overflow-hidden shrink-0 border-4 border-stone-500">
           <img src="https://picsum.photos/200/200?grayscale" alt="Planner" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-1">{PLANNER.name} 플래너</h3>
          <p className="text-emerald-400 font-medium mb-4">{PLANNER.position} | {PLANNER.company}</p>
          <div className="text-sm text-stone-300 space-y-1 mb-6">
            {PLANNER.specialty.map((spec, i) => (
              <p key={i}>• {spec}</p>
            ))}
          </div>
          <div className="text-xl font-bold flex items-center gap-2">
            <Phone className="w-5 h-5" /> {PLANNER.phone}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center px-8">
        <p className="font-serif italic text-lg text-stone-600 leading-relaxed">
          "저는 단순히 보험만 권유드리는 사람이 아닙니다.<br/>
          대표님께서 평생 피땀 흘려 일궈오신 농장이 아드님에게 안전하게 이어지고,<br/>
          따님과 배우자분까지 공정하고 든든하게 보호받을 수 있도록<br/>
          <strong className="text-emerald-700">가족 전체의 미래를 함께 설계하는 파트너</strong>가 되고자 합니다."
        </p>
      </div>
    </div>
  </A4Page>
);

export const Portfolio = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <CoverPage />
      <DiagnosisPage />
      <GoalsPage />
      <Solution1Page />
      <Solution23Page />
      <SummaryPage />
    </div>
  );
};