import React, { useState } from 'react';
import { Portfolio } from './components/Portfolio';
import { Summary } from './components/Summary';
import { Profile } from './components/Profile';
import { ViewMode } from './types';
import { Printer, Layout, FileText, UserCircle, Info } from 'lucide-react';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.PORTFOLIO);

  const handlePrint = () => {
    // Show instruction before printing
    alert("🖨️ PDF 저장 안내\n\n1. 인쇄 창이 열리면 '대상(Destination)'을 [PDF로 저장]으로 변경해주세요.\n2. [설정 더보기]에서 [배경 그래픽]을 체크하면 더 예쁘게 나옵니다.");
    window.print();
  };

  return (
    <div className="min-h-screen">
      {/* Navigation - Hidden when printing */}
      <nav className="sticky top-0 z-50 bg-stone-900 text-white p-4 shadow-lg no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Layout className="text-emerald-400" />
            <span className="font-bold text-lg">DairyPlan Pro</span>
          </div>

          <div className="flex gap-2">
             <button 
              onClick={() => setViewMode(ViewMode.PORTFOLIO)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${viewMode === ViewMode.PORTFOLIO ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
            >
              <FileText size={16} /> 포트폴리오 (제안서)
            </button>
            <button 
              onClick={() => setViewMode(ViewMode.SUMMARY)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${viewMode === ViewMode.SUMMARY ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
            >
              <Layout size={16} /> 요약본
            </button>
            <button 
              onClick={() => setViewMode(ViewMode.PROFILE)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${viewMode === ViewMode.PROFILE ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
            >
              <UserCircle size={16} /> 프로필/명함
            </button>
          </div>

          <button 
            onClick={handlePrint}
            className="bg-white text-stone-900 px-6 py-2 rounded-full font-bold hover:bg-stone-200 transition-colors flex items-center gap-2 shadow-sm"
          >
            <Printer size={18} />
            PDF 저장 / 인쇄
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-stone-200 min-h-screen print:bg-white">
         {/* Instruction Banner - Hidden when printing */}
        <div className="bg-emerald-100 border-b border-emerald-200 p-3 text-center text-emerald-800 text-sm no-print flex justify-center items-center gap-2">
          <Info size={16}/>
          <span>인쇄 팁: 'PDF 저장' 시 용지 크기를 <strong>A4</strong>, 여백을 <strong>'없음'</strong>으로 설정하면 가장 깔끔하게 출력됩니다.</span>
        </div>

        {viewMode === ViewMode.PORTFOLIO && <Portfolio />}
        {viewMode === ViewMode.SUMMARY && <Summary />}
        {viewMode === ViewMode.PROFILE && <Profile />}
      </main>
    </div>
  );
};

export default App;