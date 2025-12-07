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
  ChevronDown,
  Calendar,
  TrendingUp,
  Calculator,
  Scale,
  FileText,
  Landmark,
  Lock,
  ArrowDown
} from 'lucide-react';

// --- Design System Components ---

// Premium Page Wrapper with Watermark
const A4Page: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`a4-page print-break-after relative bg-white ${className}`}>
    {/* Watermark */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
       <div className="transform -rotate-45 text-9xl font-black text-stone-900 whitespace-nowrap">
         POULTRY FARM SUCCESSION
       </div>
    </div>
    
    {children}
    
    {/* Professional Footer */}
    <div className="absolute bottom-6 left-0 w-full px-10 flex justify-between items-end">
      <div className="text-[10px] text-stone-400 font-light tracking-wider">
        CONFIDENTIAL & PROPRIETARY<br/>
        Copyright © {new Date().getFullYear()} {PLANNER.company}. All rights reserved.
      </div>
      <div className="text-right">
        <div className="text-xs font-bold text-stone-600 tracking-widest uppercase mb-1">나누리사업단</div>
        <div className="text-[10px] text-emerald-600 flex items-center justify-end gap-1">
          <span>Consultant. {PLANNER.name}</span>
          <span className="w-px h-2 bg-emerald-200"></span>
          <span>{PLANNER.phone}</span>
        </div>
      </div>
    </div>
  </div>
);

// Section Header Component
const SectionHeader = ({ number, title, subtitle }: { number: string, title: string, subtitle?: string }) => (
  <div className="flex items-end gap-4 mb-8 border-b-2 border-emerald-900/10 pb-4">
    <div className="text-5xl font-black text-emerald-100 leading-none -mb-1">{number}</div>
    <div className="flex-1">
      <h2 className="text-2xl font-bold text-stone-800 tracking-tight">{title}</h2>
      {subtitle && <p className="text-sm text-emerald-700 font-medium mt-1">{subtitle}</p>}
    </div>
  </div>
);

// Card Component
const Card = ({ children, className = "", title, icon: Icon }: { children?: React.ReactNode, className?: string, title?: string, icon?: any }) => (
  <div className={`bg-white rounded-xl border border-stone-200 shadow-sm p-5 ${className}`}>
    {title && (
      <div className="flex items-center gap-2 mb-4 border-b border-stone-100 pb-2">
        {Icon && <Icon size={18} className="text-emerald-600" />}
        <h3 className="font-bold text-stone-800 text-lg">{title}</h3>
      </div>
    )}
    {children}
  </div>
);

// --- Pages ---

// Page 1: Premium Cover
const CoverPage = () => (
  <A4Page className="p-0 overflow-hidden relative bg-stone-900">
    {/* Background Image with Gradient Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1541857754-557a445a9b48?q=80&w=2070&auto=format&fit=crop" 
        alt="Chicken Farm" 
        className="w-full h-full object-cover opacity-40 grayscale" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent"></div>
    </div>

    {/* Content Container */}
    <div className="relative z-10 h-full flex flex-col justify-between p-16">
      
      {/* Top Badge */}
      <div className="flex justify-between items-start">
        <div className="border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 rounded text-xs text-white/80 tracking-widest uppercase font-light">
          Strictly Confidential
        </div>
        <div className="text-emerald-400 font-black text-2xl tracking-tighter">
          NANURI<span className="text-white">PLAN</span>
        </div>
      </div>

      {/* Main Title Area */}
      <div className="space-y-6">
        <div className="w-20 h-1 bg-emerald-500 mb-8"></div>
        <h2 className="text-2xl text-emerald-300 font-medium tracking-wide">Poultry Farm Succession Strategy</h2>
        <h1 className="text-6xl font-black text-white leading-tight">
          양계농가 가업승계<br/>
          <span className="text-white/90">종합 솔루션 제안서</span>
        </h1>
        <p className="text-lg text-stone-300 max-w-xl font-light leading-relaxed pt-4 border-t border-white/10">
          대한민국 양계업의 미래를 지키는 힘.<br/>
          상속세 재원 마련부터 지분 구조 설계까지, <br/>
          <strong>가장 완벽한 승계 로드맵</strong>을 제안합니다.
        </p>
      </div>

      {/* Presenter Info */}
      <div className="flex items-end justify-end border-t border-white/20 pt-8">
        <div className="text-right">
          <p className="text-xs text-emerald-400 uppercase tracking-widest mb-2">Prepared By</p>
          <p className="text-xl font-bold text-white">{PLANNER.name} 플래너</p>
          <p className="text-sm text-stone-400">{PLANNER.company} | 자산관리 전문가</p>
          <div className="mt-3 inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs text-white">
            <Phone size={12} /> {PLANNER.phone}
          </div>
        </div>
      </div>
    </div>
  </A4Page>
);

// Page 2: Diagnosis (Enhanced)
const DiagnosisPage = () => (
  <A4Page>
    <SectionHeader number="01" title="농장 현황 진단" subtitle="Current Status & Risk Analysis" />

    <div className="grid grid-cols-12 gap-8 h-[calc(100%-8rem)]">
      
      {/* Left Column: Family & Assets (7 cols) */}
      <div className="col-span-7 flex flex-col gap-6">
        
        {/* Family Structure Card */}
        <Card title="가족 구성 및 승계 니즈" icon={Users}>
          <div className="flex items-center justify-between gap-4">
             {/* Parents */}
             <div className="bg-stone-50 rounded-lg p-4 flex-1 text-center border border-stone-100">
               <div className="text-xs text-stone-500 mb-1">Current Owner</div>
               <div className="font-bold text-stone-800 text-lg">대표님 (62세)</div>
               <div className="text-sm text-stone-600">배우자 (60세)</div>
             </div>
             <ArrowRight className="text-stone-300" />
             {/* Successor */}
             <div className="bg-emerald-50 rounded-lg p-4 flex-1 text-center border border-emerald-100 ring-2 ring-emerald-500/20">
               <div className="text-xs text-emerald-600 font-bold mb-1">Successor (후계농)</div>
               <div className="font-bold text-emerald-900 text-lg">아들 (35세)</div>
               <div className="text-xs text-emerald-700 bg-emerald-200/50 inline-block px-2 py-0.5 rounded mt-1">농장 승계 희망</div>
             </div>
             {/* Non-Successor */}
             <div className="bg-stone-50 rounded-lg p-4 flex-1 text-center border border-stone-100 opacity-80">
               <div className="text-xs text-stone-500 mb-1">Beneficiary</div>
               <div className="font-bold text-stone-700 text-lg">딸 (32세)</div>
               <div className="text-xs text-stone-500 mt-1">현금 자산 희망</div>
             </div>
          </div>
        </Card>

        {/* Financial Status Card */}
        <Card title="추정 재무상태표 (Balance Sheet)" icon={Scale} className="flex-1">
          <div className="flex gap-4 h-full items-center">
            {/* Increased chart width from w-1/3 to w-5/12 for better legend spacing */}
            <div className="w-5/12">
              <AssetPieChart />
            </div>
            {/* Adjusted text width */}
            <div className="w-7/12 space-y-4">
               <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                 <span className="font-bold text-stone-600">부동산 (토지/계사)</span>
                 <span className="font-bold text-stone-900">12.0 억</span>
               </div>
               <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                 <span className="font-bold text-stone-600">동산 (산란계/시설)</span>
                 <span className="font-bold text-stone-900">3.0 억</span>
               </div>
               <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                 <span className="font-bold text-stone-600">금융 자산</span>
                 <span className="font-bold text-stone-900">3.0 억</span>
               </div>
               <div className="flex justify-between items-center bg-stone-100 p-3 rounded text-sm text-stone-500">
                 <span>(-) 부채 (운영/시설자금)</span>
                 <span>(3.0) 억</span>
               </div>
               <div className="flex justify-between items-center bg-emerald-600 text-white p-4 rounded shadow-md">
                 <span className="font-bold">순자산 (Net Asset)</span>
                 <span className="font-black text-xl">15.0 억</span>
               </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Right Column: Risks (5 cols) */}
      <div className="col-span-5 flex flex-col h-full">
         <Card title="핵심 리스크 진단" icon={AlertTriangle} className="h-full bg-red-50/30 border-red-100">
            <div className="space-y-8">
              
              {/* Risk 1 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-red-900 text-sm">경영 리스크 (AI/Volatility)</span>
                  <span className="font-bold text-red-600">매우 심각</span>
                </div>
                <div className="w-full bg-red-100 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full w-[95%]"></div>
                </div>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  <strong>AI(조류독감), 계란/육계 시세 급락</strong> 등으로 인한 살처분 및 현금흐름 악화 시, 상속 발생하면 <strong className="text-red-700 underline">농장 급매 위기</strong> 직면.
                </p>
              </div>

              {/* Risk 2 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-amber-800 text-sm">상속 분쟁 가능성 (Legal Dispute)</span>
                  <span className="font-bold text-amber-600">주의</span>
                </div>
                <div className="w-full bg-amber-100 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full w-[70%]"></div>
                </div>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  비현금 자산(계사·산란계) 위주라 딸에게 줄 현금이 부족. <strong className="text-amber-800">"누가 더 많이 받았나"</strong>에 대한 형제간 갈등 우려.
                </p>
              </div>

              <div className="bg-white p-4 rounded border border-red-200 shadow-sm mt-8">
                 <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                   <Target size={16}/> 진단 결론
                 </h4>
                 <ul className="list-disc list-inside text-sm text-stone-700 space-y-1">
                   <li>현금 상속 재원 절대 부족 (급매물 위험)</li>
                   <li><strong>사전 증여</strong>(계사/토지)로 상속 자산 축소 필요</li>
                   <li><strong>즉시 현금화 가능한 자산(보험)</strong> 준비 필수</li>
                 </ul>
              </div>

            </div>
         </Card>
      </div>

    </div>
  </A4Page>
);

// Page 3: Goals (Enhanced)
const GoalsPage = () => (
  <A4Page>
    <SectionHeader number="02" title="승계 목표 및 구조" subtitle="Strategic Blueprint" />

    {/* 3 Core Goals */}
    <div className="grid grid-cols-3 gap-6 mb-12">
      {[
        { 
          icon: Tractor, 
          title: "완벽한 가업 승계", 
          desc: "양계 생산 기반 100%\n아들 단독 승계", 
          color: "emerald" 
        },
        { 
          icon: Scale, 
          title: "공정한 자산 분배", 
          desc: "비후계자(딸)에게 납득할 만한\n현금 자산 보상", 
          color: "blue" 
        },
        { 
          icon: ShieldCheck, 
          title: "조세·경영 리스크 헷지", 
          desc: "상속세 재원 완비 및\n법인 활용 절세 실행", 
          color: "stone" 
        }
      ].map((item, idx) => (
        <div key={idx} className={`bg-${item.color}-50 p-6 rounded-xl border border-${item.color}-200 flex flex-col items-center text-center shadow-sm`}>
          <div className={`w-14 h-14 bg-white rounded-full flex items-center justify-center text-${item.color}-600 mb-4 shadow-md`}>
            <item.icon size={28} />
          </div>
          <h3 className={`font-bold text-lg text-${item.color}-900 mb-2`}>{item.title}</h3>
          <p className="text-sm text-stone-600 whitespace-pre-line leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Master Plan Diagram */}
    <Card title="Master Succession Plan" className="pb-12 bg-gradient-to-b from-white to-stone-50">
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
        
        {/* Level 1: Source */}
        <div className="bg-stone-800 text-white px-10 py-4 rounded-full shadow-xl border-4 border-stone-200 z-10">
          <div className="text-center">
            <span className="block text-xs text-stone-400 font-bold tracking-widest uppercase">Asset Source</span>
            <span className="block text-xl font-bold">대표님 (부모님)</span>
          </div>
        </div>

        {/* Connector */}
        <div className="h-10 w-0.5 bg-stone-300"></div>

        {/* Level 2: Vehicles */}
        <div className="grid grid-cols-3 gap-4 w-full px-8">
           <div className="bg-white border-2 border-emerald-500 rounded-lg p-3 text-center shadow-md">
             <div className="text-emerald-700 font-bold text-sm mb-1">Vehicle 1</div>
             <div className="font-black text-stone-800">생전 증여 (계사/토지)</div>
           </div>
           <div className="bg-white border-2 border-stone-400 rounded-lg p-3 text-center shadow-md">
             <div className="text-stone-600 font-bold text-sm mb-1">Vehicle 2</div>
             <div className="font-black text-stone-800">농업법인 전환</div>
           </div>
           <div className="bg-white border-2 border-blue-500 rounded-lg p-3 text-center shadow-md">
             <div className="text-blue-700 font-bold text-sm mb-1">Vehicle 3</div>
             <div className="font-black text-stone-800">종신보험 플랜</div>
           </div>
        </div>

        {/* Connector Complex */}
        <div className="relative w-full h-12 mt-2">
           <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-stone-300"></div>
           <div className="absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-stone-300"></div>
           <div className="absolute top-1/2 left-[20%] h-6 w-0.5 bg-stone-300"></div>
           <div className="absolute top-1/2 right-[20%] h-6 w-0.5 bg-stone-300"></div>
        </div>

        {/* Level 3: Outcomes */}
        <div className="grid grid-cols-2 gap-16 w-full px-12">
           
           {/* Outcome 1: Son */}
           <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 relative group hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Primary Goal
              </div>
              <h4 className="text-center font-bold text-xl text-emerald-900 mb-4">아들 (후계자)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600"/>
                  <span className="font-bold text-stone-700">농장 실물 자산 승계</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600"/>
                  <span className="font-bold text-stone-700">경영권(지분) 확보</span>
                </li>
                 <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600"/>
                  <span className="font-bold text-stone-700">상속세 및 운영자금</span>
                </li>
              </ul>
           </div>

           {/* Outcome 2: Daughter */}
           <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 relative group hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Equity Goal
              </div>
              <h4 className="text-center font-bold text-xl text-blue-900 mb-4">딸 (비후계자)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600"/>
                  <span className="font-bold text-stone-700">현금 자산 (보험금)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600"/>
                  <span className="font-bold text-stone-700">소수 지분(배당권)</span>
                </li>
                 <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600"/>
                  <span className="font-bold text-stone-700">유류분 이슈 해소</span>
                </li>
              </ul>
           </div>

        </div>

      </div>
    </Card>
  </A4Page>
);

// Page 4: Solution 1 (Insurance) - High Quality Visuals
const Solution1Page = () => (
  <A4Page>
    <SectionHeader number="03" title="유동성 확보 플랜" subtitle="Solution 1: Life Insurance Strategy" />

    <div className="space-y-8">
      
      {/* Visual Concept */}
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
           <h3 className="font-bold text-xl text-stone-800">
             <span className="text-emerald-600">Why?</span> 양계농가, 왜 종신보험인가?
           </h3>
           <p className="text-stone-600 leading-relaxed text-justify">
             양계업은 AI(조류독감) 발생 시 전량 살처분 위험과 계란 시세 변동성이 큽니다. 상속 발생 시점에 <strong>'확정적인 현금(Instant Cash)'</strong>이 없다면,
             상속세를 내기 위해 <strong className="text-red-600">계사나 부지를 급매</strong>해야 하는 최악의 상황이 발생합니다.
           </p>
           
           <div className="bg-stone-100 p-4 rounded-lg mt-4 border border-stone-200">
             <div className="text-sm font-bold text-stone-700 mb-2">필요 자금 분석 (예시)</div>
             <div className="flex justify-between text-sm mb-1">
               <span>아들: 상속세/운영비</span>
               <span className="font-bold">2.0 억</span>
             </div>
             <div className="flex justify-between text-sm mb-1">
               <span>딸: 현금 상속분</span>
               <span className="font-bold">3.0 억</span>
             </div>
             <div className="w-full h-px bg-stone-300 my-2"></div>
             <div className="flex justify-between font-black text-emerald-700 text-lg">
               <span>총 필요 보험금</span>
               <span>5.0 억</span>
             </div>
           </div>
        </div>

        {/* Graph Simulation */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm">
           <h4 className="font-bold text-stone-800 mb-6 text-center">상속 재원 마련 방법 비교</h4>
           <div className="flex justify-around items-end h-48 pb-2 border-b border-stone-300 gap-8 px-4">
              {/* Option A */}
              <div className="w-24 flex flex-col items-center gap-2 group">
                <div className="text-xs text-center text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">계사/부지 급매</div>
                <div className="w-full bg-red-200 h-32 rounded-t-lg relative flex items-end justify-center overflow-hidden border border-red-300">
                  <div className="absolute top-2 text-red-800 font-bold text-xs">자산 매각</div>
                  <div className="mb-2 text-red-900 font-bold">손해</div>
                </div>
                <div className="text-xs font-bold text-stone-600">농장 폐업 위기</div>
              </div>

              {/* Option B */}
              <div className="w-24 flex flex-col items-center gap-2 group">
                 <div className="text-xs text-center text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">매월 이자 부담</div>
                 <div className="w-full bg-stone-200 h-24 rounded-t-lg relative flex items-end justify-center border border-stone-300">
                   <div className="mb-2 text-stone-600 font-bold">대출</div>
                 </div>
                 <div className="text-xs font-bold text-stone-600">연부연납</div>
              </div>

              {/* Option C (Winner) */}
              <div className="w-24 flex flex-col items-center gap-2">
                 <div className="text-xs text-center text-emerald-600 font-bold">Best Solution</div>
                 <div className="w-full bg-emerald-500 h-40 rounded-t-lg relative flex items-end justify-center shadow-lg transform hover:scale-105 transition-transform">
                   <div className="absolute top-2 text-white/90 font-bold text-xs">면세 효과</div>
                   <div className="mb-2 text-white font-black text-lg">5억</div>
                 </div>
                 <div className="text-xs font-black text-emerald-700">종신보험</div>
              </div>
           </div>
        </div>
      </div>

      {/* Plan Details Table */}
      <div className="mt-8">
        <div className="bg-stone-800 text-white rounded-t-xl px-6 py-3 font-bold flex justify-between items-center">
          <span>제안 설계 (Proposal)</span>
          <span className="text-xs font-normal text-stone-300">가입설계서 기준 상세 내역</span>
        </div>
        <table className="w-full text-sm border-collapse">
          <tbody className="divide-y divide-stone-200 border-x border-b border-stone-200">
             <tr className="bg-stone-50">
               <th className="py-3 px-4 text-left w-1/4 border-r border-stone-200">상품명</th>
               <td className="py-3 px-4 font-bold text-emerald-900">무배당 경영인 정기보험 (또는 종신)</td>
             </tr>
             <tr>
               <th className="py-3 px-4 text-left bg-stone-50 border-r border-stone-200">계약자 / 피보험자</th>
               <td className="py-3 px-4">법인(또는 대표님) / 대표님 (62세)</td>
             </tr>
             <tr className="bg-stone-50">
               <th className="py-3 px-4 text-left border-r border-stone-200">납입 기간</th>
               <td className="py-3 px-4">10년납 / 15년납 (선택 가능)</td>
             </tr>
             <tr>
               <th className="py-3 px-4 text-left bg-stone-50 border-r border-stone-200">사망 보험금</th>
               <td className="py-3 px-4 font-black text-xl text-emerald-600">500,000,000 원</td>
             </tr>
             <tr className="bg-emerald-50/50">
               <th className="py-3 px-4 text-left border-r border-stone-200 text-emerald-800 align-top pt-4">활용 방안</th>
               <td className="py-3 px-4 space-y-1">
                 <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500"/> <strong>아들:</strong> 상속세 + 농장 운영자금 (사료비/입식)</div>
                 <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> <strong>딸:</strong> 공정한 현금 상속 (분쟁 예방)</div>
                 <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-stone-500"/> <strong>배우자:</strong> 노후 생활비 및 의료비 보장</div>
               </td>
             </tr>
          </tbody>
        </table>
      </div>

    </div>
  </A4Page>
);

// Page 5: Solution 2 (Gift Strategy) - Legal & Detailed
const Solution2_GiftPage = () => (
  <A4Page>
    <SectionHeader number="04" title="생전 증여 & 장기 플랜" subtitle="Solution 2: Step-by-Step Gift Strategy" />

    {/* Legal Basis Box */}
    <div className="bg-stone-50 border-l-4 border-stone-400 p-4 mb-8 text-sm text-stone-700 leading-relaxed shadow-sm">
      <span className="font-bold text-stone-900 block mb-1 flex items-center gap-2"><Landmark size={16}/> 전략 목표</span>
      "한 번에 많은 자산을 넘기면 세금이 큽니다. 아들이 농장에 참여하는 지금부터 
      <strong>10년 단위 증여공제</strong>를 활용하여 <span className="bg-yellow-100 px-1">계사, 농지, 시설을 분할 증여</span>함으로써
      미래의 상속세 과세표준을 미리 낮춰야 합니다."
    </div>

    {/* Strategy Timeline */}
    <div className="mb-10">
      <h3 className="font-bold text-xl text-stone-800 mb-6 flex items-center gap-2">
        <Calendar className="text-emerald-600"/> 최적 실행 로드맵 (Execution Timeline)
      </h3>
      
      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone-200"></div>

        {/* Step 1 */}
        <div className="relative pl-24 pb-8 group">
          <div className="absolute left-0 w-16 h-16 bg-emerald-600 text-white rounded-xl flex flex-col items-center justify-center font-bold shadow-md z-10 border-4 border-white">
            <span className="text-xs opacity-80">NOW</span>
            <span className="text-lg">1차</span>
          </div>
          <Card className="hover:border-emerald-400 transition-colors">
            <h4 className="font-bold text-emerald-800 mb-2">1단계: 핵심 자산 일부 증여</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
               <div>
                 <p className="text-stone-500 text-xs">대상 자산</p>
                 <p className="font-bold text-stone-800">계사·선별장 (약 1.5억 상당)</p>
               </div>
               <div>
                 <p className="text-stone-500 text-xs">기대 효과</p>
                 <p className="font-bold text-emerald-600">아들의 실질적 농장주 지위 확보</p>
               </div>
            </div>
            <p className="text-xs text-stone-500 mt-2 bg-stone-50 p-2 rounded">
              * 성년 자녀 증여공제(5천만원) 및 낮은 구간 세율 활용
            </p>
          </Card>
        </div>

        {/* Step 2 */}
        <div className="relative pl-24 pb-8 group">
          <div className="absolute left-2 top-0 w-12 h-12 bg-white border-2 border-stone-300 text-stone-500 rounded-full flex items-center justify-center font-bold z-10">
             <span className="text-xs">10yr</span>
          </div>
          <Card className="hover:border-stone-400 transition-colors bg-stone-50">
            <h4 className="font-bold text-stone-800 mb-2">2단계: 2차 추가 증여</h4>
            <ul className="text-sm text-stone-600 space-y-1 list-disc list-inside">
              <li>10년 경과 후 증여공제 리셋 활용</li>
              <li>추가 자산 1.5억 상당 증여</li>
              <li>상속 발생 시점의 자산 규모 사전 축소 효과</li>
            </ul>
          </Card>
        </div>

        {/* Step 3 */}
        <div className="relative pl-24 group">
           <div className="absolute left-2 top-0 w-12 h-12 bg-white border-2 border-stone-300 text-stone-500 rounded-full flex items-center justify-center font-bold z-10">
             <span className="text-xs">딸</span>
          </div>
          <Card className="hover:border-blue-400 transition-colors bg-blue-50 border-blue-100">
            <h4 className="font-bold text-blue-900 mb-2">별도 플랜: 딸을 위한 저축/보험</h4>
            <div className="flex items-center gap-4">
               <div className="flex-1">
                 <p className="text-xs text-blue-700 font-bold mb-1">현금 자산 준비</p>
                 <p className="text-sm text-stone-700">
                   매월 50~100만원씩 장기 저축/보험 가입.
                   결혼자금 또는 부모님 유산 명목으로 <span className="underline decoration-blue-300">현금 자산을 명확하게</span> 준비.
                 </p>
               </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </A4Page>
);

// Page 6: Solution 3 (Corporation) - Comparative Analysis
const Solution3_CorpPage = () => (
  <A4Page>
    <SectionHeader number="05" title="법인 전환 & CEO 플랜" subtitle="Solution 3: Incorporation Strategy" />

    {/* Comparison Table */}
    <div className="mb-10">
      <h3 className="font-bold text-xl text-stone-800 mb-6">농업법인(영농조합) 활용 전략</h3>
      <div className="overflow-hidden border border-stone-200 rounded-xl shadow-sm">
        <table className="w-full text-sm text-center">
          <thead className="bg-stone-100 text-stone-800 font-bold">
            <tr>
              <th className="p-4 border-r border-stone-200">구분</th>
              <th className="p-4 border-r border-stone-200 w-[35%]">개인 농가</th>
              <th className="p-4 bg-emerald-50 text-emerald-800 w-[35%]">농업회사법인</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 text-stone-600">
            <tr>
              <td className="p-4 font-bold bg-stone-50 border-r border-stone-200">세율 구조</td>
              <td className="p-4 border-r border-stone-200">6% ~ 45% (종합소득세)</td>
              <td className="p-4 font-bold text-emerald-600 bg-white">10% ~ 20% (법인세)</td>
            </tr>
            <tr>
              <td className="p-4 font-bold bg-stone-50 border-r border-stone-200">대외 신인도</td>
              <td className="p-4 border-r border-stone-200">대출 한도 제한적</td>
              <td className="p-4 text-emerald-600 bg-white">자금 조달 및 정책자금 유리</td>
            </tr>
            <tr>
              <td className="p-4 font-bold bg-stone-50 border-r border-stone-200">승계 방법</td>
              <td className="p-4 border-r border-stone-200">개별 자산 등기 (복잡)</td>
              <td className="p-4 font-bold text-emerald-600 bg-white">주식(지분) 양수도 (간편)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Share Structure Roadmap */}
    <div className="grid grid-cols-2 gap-8 mb-8">
      <Card title="지분 승계 로드맵" icon={TrendingUp}>
         <div className="space-y-6 mt-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold text-stone-500">STEP 1: 설립 시</span>
                <span className="text-stone-400">대표 100%</span>
              </div>
              <div className="h-4 bg-stone-200 rounded overflow-hidden">
                <div className="h-full bg-stone-600 w-full"></div>
              </div>
            </div>
            <div className="flex justify-center"><ArrowDown size={20} className="text-stone-300"/></div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold text-emerald-600">STEP 2: 승계 완료</span>
                <span className="text-stone-400">아들 70%(경영) / 딸 30%(배당)</span>
              </div>
              <div className="h-4 bg-stone-200 rounded overflow-hidden flex">
                <div className="h-full bg-emerald-500 w-[70%]"></div>
                <div className="h-full bg-blue-400 w-[30%]"></div>
              </div>
            </div>
            <p className="text-xs text-stone-500 bg-stone-50 p-2 rounded mt-2">
              * 아들은 농장 경영권을 갖고, 딸은 지분을 통해 배당을 받거나 추후 지분을 매각하여 자산화 가능
            </p>
         </div>
      </Card>

      <Card title="법인 명의 Key-Man 보험" icon={ShieldCheck} className="bg-amber-50/50 border-amber-100">
         <div className="flex flex-col justify-between h-full">
            <p className="text-sm text-stone-700 leading-relaxed mb-4">
              법인이 대표님(CEO)을 피보험자로 가입. 
              유고 시 법인으로 고액의 보험금이 유입되어 <strong>운영자금, 대출 상환, 사료비/재입식</strong> 등에 활용합니다.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-white p-2 rounded border border-amber-200 shadow-sm">
                <div className="font-bold text-amber-800">경영 안정</div>
                <div className="text-stone-500">긴급 자금</div>
              </div>
              <div className="bg-white p-2 rounded border border-amber-200 shadow-sm">
                <div className="font-bold text-amber-800">부채 상환</div>
                <div className="text-stone-500">리스크 제거</div>
              </div>
              <div className="bg-white p-2 rounded border border-amber-200 shadow-sm">
                <div className="font-bold text-amber-800">승계 지원</div>
                <div className="text-stone-500">초기 안착</div>
              </div>
            </div>
         </div>
      </Card>
    </div>
  </A4Page>
);

// Page 7: Summary & Action Plan
const SummaryPage = () => (
  <A4Page>
     <SectionHeader number="06" title="핵심 요약 및 실행" subtitle="Executive Summary & Action Plan" />

     {/* Summary Cards */}
     <div className="grid grid-cols-2 gap-6 mb-12">
       <Card className="bg-emerald-600 text-white border-none shadow-lg">
         <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
           <Tractor className="text-emerald-200"/> 양계농가 승계
         </h3>
         <p className="text-emerald-100 leading-relaxed">
           후계자(아들)에게 농장 및 계사 시설을 100% 온전히 승계하여, 
           상속세 납부를 위해 농장을 급하게 파는 일을 원천 방지합니다.
         </p>
       </Card>
       <Card className="bg-stone-800 text-white border-none shadow-lg">
         <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
           <Coins className="text-stone-400"/> 재정 안정
         </h3>
         <p className="text-stone-300 leading-relaxed">
           상속세 납부 재원과 비후계자(딸)를 위한 현금 자산을 사전에 마련하여,
           가족 간의 법적 분쟁 리스크를 최소화합니다.
         </p>
       </Card>
     </div>

     {/* Action Checklist */}
     <div className="bg-white border-t-4 border-stone-800 p-8 shadow-xl rounded-b-xl">
       <h3 className="font-bold text-2xl text-stone-900 mb-6">Action Plan Checklist</h3>
       
       <div className="space-y-4">
         {[
           { step: "Step 1", text: "현재 자산(사육 규모/계사) 현황 정리 및 점검", checked: true },
           { step: "Step 2", text: "상속세·증여세 예상 시뮬레이션 (세무사)", checked: false },
           { step: "Step 3", text: "종신보험(상속재원) 설계 및 수익자 지정", checked: false },
           { step: "Step 4", text: "생전 증여(농지/계사) 장기 로드맵 수립", checked: false },
           { step: "Step 5", text: "정기 점검 (AI 등 양계 환경 변화 반영)", checked: false },
         ].map((item, i) => (
           <div key={i} className="flex items-center gap-4 p-3 hover:bg-stone-50 rounded transition-colors border-b border-stone-100 last:border-0">
              <div className={`font-bold text-sm ${item.checked ? 'text-emerald-600' : 'text-stone-400'}`}>{item.step}</div>
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${item.checked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300'}`}>
                {item.checked && <CheckCircle2 size={16} />}
              </div>
              <div className={`flex-1 font-medium ${item.checked ? 'text-stone-800 line-through decoration-emerald-500' : 'text-stone-700'}`}>
                {item.text}
              </div>
           </div>
         ))}
       </div>
     </div>
     
     <div className="mt-12 text-center">
       <p className="text-stone-500 text-sm mb-2">위 제안 내용은 기초 상담을 위한 가안이며, 실제 실행 시 세법 변경 등에 따라 달라질 수 있습니다.</p>
       <div className="font-serif italic text-2xl text-stone-800">
         "대표님의 평생 땀방울인 농장이<br/>가장 가치 있게 이어지도록 돕겠습니다."
       </div>
       <div className="mt-6">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" className="h-12 mx-auto opacity-50" />
       </div>
     </div>
  </A4Page>
);

export const Portfolio = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 bg-stone-100 gap-8">
      <CoverPage />
      <DiagnosisPage />
      <GoalsPage />
      <Solution1Page />
      <Solution2_GiftPage />
      <Solution3_CorpPage />
      <SummaryPage />
    </div>
  );
};