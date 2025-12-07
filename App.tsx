import React, { useState } from 'react';
import { Portfolio } from './components/Portfolio';
import { Summary } from './components/Summary';
import { Profile } from './components/Profile';
import { ViewMode } from './types';
import { Printer, Layout, FileText, UserCircle, Info, Download } from 'lucide-react';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.PORTFOLIO);

  const handlePrint = () => {
    // Use setTimeout to ensure the click event is fully registered and UI updates before blocking with print dialog
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-stone-200">
      {/* Navigation - Fixed to ensure it is ALWAYS on top and clickable */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-stone-900 text-white p-4 shadow-lg no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Layout className="text-emerald-400" />
            <span className="font-bold text-lg">PoultryPlan Pro</span>
          </div>

          <div className="flex gap-2">
             <button 
              onClick={() => setViewMode(ViewMode.PORTFOLIO)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer ${viewMode === ViewMode.PORTFOLIO ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
            >
              <FileText size={16} /> 포트폴리오 (제안서)
            </button>
            <button 
              onClick={() => setViewMode(ViewMode.SUMMARY)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer ${viewMode === ViewMode.SUMMARY ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
            >
              <Layout size={16} /> 요약본
            </button>
            <button 
              onClick={() => setViewMode(ViewMode.PROFILE)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer ${viewMode === ViewMode.PROFILE ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
            >
              <UserCircle size={16} /> 프로필/명함
            </button>
          </div>

          <button 
            onClick={handlePrint}
            className="bg-emerald-500 text-white border-2 border-emerald-400 px-6 py-2 rounded-full font-bold hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <Download size={18} />
            PDF 다운로드
          </button>
        </div>
      </nav>

      {/* Main Content - Added padding-top to account for fixed navbar */}
      <main className="pt-[88px] min-h-screen print:pt-0 print:bg-white print:min-h-0 print:h-auto print:overflow-visible">
         {/* Instruction Banner - Hidden when printing */}
        <div className="bg-stone-800 border-b border-stone-700 p-4 text-center text-stone-200 text-sm no-print flex flex-col justify-center items-center gap-1">
          <div className="flex items-center gap-2 font-bold text-emerald-400 text-base">
            <Info size={18}/>
            <span>다운로드(인쇄) 가이드</span>
          </div>
          <p>인쇄 설정창에서 <strong>[대상: PDF로 저장]</strong>, <strong>[여백: 없음]</strong>, <strong>[배경 그래픽: 체크]</strong>를 선택 후 저장하세요.</p>
        </div>

        {viewMode === ViewMode.PORTFOLIO && <Portfolio />}
        {viewMode === ViewMode.SUMMARY && <Summary />}
        {viewMode === ViewMode.PROFILE && <Profile />}
      </main>
    </div>
  );
};

export default App;