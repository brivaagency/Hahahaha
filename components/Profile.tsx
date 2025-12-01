import React from 'react';
import { PLANNER } from '../types';
import { Phone, Mail, MapPin, Award } from 'lucide-react';

export const Profile = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="a4-page print-break-after flex flex-col justify-center items-center bg-stone-100">
        
        <div className="bg-white w-full max-w-lg shadow-2xl overflow-hidden rounded-xl border border-stone-200">
          
          {/* Top Image Section */}
          <div className="h-48 bg-emerald-800 relative">
            <img 
              src="https://picsum.photos/800/400?grayscale" 
              alt="Background" 
              className="w-full h-full object-cover opacity-30" 
            />
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-stone-300 overflow-hidden shadow-lg">
                 <img src="https://picsum.photos/200/200?grayscale" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="pt-20 pb-10 px-8 text-center">
            <h1 className="text-3xl font-bold text-stone-900 mb-1">{PLANNER.name}</h1>
            <p className="text-emerald-600 font-medium mb-6">{PLANNER.position}</p>

            <div className="space-y-4 mb-8 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-3 text-stone-600">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Award size={16} />
                </div>
                <div>
                   <p className="text-xs text-stone-400">소속</p>
                   <p className="font-bold">{PLANNER.company}</p>
                </div>
              </div>
               <div className="flex items-center gap-3 text-stone-600">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Phone size={16} />
                </div>
                <div>
                   <p className="text-xs text-stone-400">Mobile</p>
                   <p className="font-bold">{PLANNER.phone}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-100 pt-6">
              <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4">Specialty</h3>
              <ul className="text-stone-700 space-y-2 text-sm font-medium">
                {PLANNER.specialty.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Footer Quote */}
          <div className="bg-stone-50 p-6 text-center border-t border-stone-200">
            <p className="italic font-serif text-stone-600 text-sm">
              "젖소 농장은 하루도 멈출 수 없는 사업입니다.<br/>
              갑작스러운 상황에도 농장과 가족이 흔들리지 않도록,<br/>
              가업승계·상속·절세까지 함께 설계해 드립니다."
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};