// File: src/components/MemoirRecap.tsx

import React from 'react';

// TypewriterText component placeholder
const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  return <div className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>{text}</div>;
};

// MemoirRecap component
const MemoirRecap: React.FC<{ person: any }> = ({ person }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F4F6' }}>
      {/* 1. Opening Section */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-2xl border border-gray-200" style={{ backgroundColor: '#FAFAFA', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>부엉이 여러분, 수고 많으셨습니다.</h2>
            </div>
            
            <div className="leading-relaxed space-y-4 text-left" style={{ color: '#000000' }}>
              <TypewriterText text="학생님이 달려온 시간을 회고하는 [Memoir]" />
              
              <p className="text-base italic" style={{ color: '#000000' }}>
                📝 'memoir'는 유명인의 회고록이라는 뜻을 지녔습니다.
              </p>
              
              <p className="text-base leading-relaxed" style={{ color: '#000000' }}>
                시대인재는 여러분 하나하나를 존중하고, 여러분이 시대인재와 함께한 시간의 가치를 간과하지 않기에 그동안 달려온 시간을 회고해보고자 했습니다.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="text-center">
                <button className="px-8 py-4 rounded-2xl font-semibold transition-all hover:transform hover:-translate-y-1" style={{ backgroundColor: '#00458C', color: 'white', boxShadow: '0 4px 8px rgba(0, 69, 140, 0.2)' }}>
                  <i className="fas fa-heart mr-2"></i>
                  시대인재와 함께한 소중한 시간
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Time Timeline Section */}
      <section className="py-16" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              {/* Start Card */}
              <div className="rounded-2xl border border-gray-200 p-6 min-w-[200px] text-center" style={{ backgroundColor: '#FAFAFA', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#6B7280' }}>시대인재 N 처음 만난 날</h3>
                <p className="text-2xl font-bold" style={{ color: '#111827' }}>{person.startDate || "2/1X일"}</p>
              </div>
              
              {/* Connector Line */}
              <div className="flex-1 h-1 mx-8 relative" style={{ background: 'linear-gradient(90deg, #D1D5DB, #9CA3AF, #D1D5DB)', borderRadius: '2px' }}>
                <div className="w-4 h-4 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: '#111827', boxShadow: '0 2px 4px rgba(17, 24, 39, 0.3)', zIndex: 10 }}></div>
              </div>
              
              {/* End Card */}
              <div className="rounded-2xl border border-gray-200 p-6 min-w-[200px] text-center" style={{ backgroundColor: '#FAFAFA', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#6B7280' }}>The End</h3>
                <p className="text-2xl font-bold" style={{ color: '#111827' }}>{person.endDate || "11/13"}</p>
              </div>
            </div>
            
            {/* Total Days Metric */}
            <div className="text-center">
              <p className="text-xl" style={{ color: '#111827' }}>
                총 <span className="font-bold" style={{ color: '#111827' }}>{person.totalDays || 0}</span>일 함께했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. Summary Section (Additional Text) */}
      <section className="py-8 px-6" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-lg" style={{ color: '#6B7280' }}>
              <span className="font-bold" style={{ color: '#00458C' }}>{person.name || '-'}</span>님은{' '}
              <span className="font-bold" style={{ color: '#00458C' }}>{person.totalStudents || '-'}</span>명 중,{' '}
              <span className="font-bold" style={{ color: '#00458C' }}>{person.campusStudents || '-'}</span>명의 학생과 함께{' '}
              <span className="font-bold" style={{ color: '#00458C' }}>{person.campus || '-'}</span>에서,{' '}
              <span className="font-bold" style={{ color: '#00458C' }}>{person.className || '-'}</span>{' '}
              <span className="font-bold" style={{ color: '#00458C' }}>{person.classStudents || '-'}</span>명과 함께 1년간 치열하게 달려왔습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Total Hours Block */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--darkest-gray)' }}>함께한 시간</h2>
            <p style={{ color: 'var(--dark-gray)' }}>시대인재와 함께 달려온 소중한 시간을 확인하세요</p>
          </div>
          
          <div className="rounded-lg p-12 mb-6" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}>
            <div className="text-center">
              <svg width="400" height="500" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className="mx-auto max-w-full h-auto" style={{ maxWidth: '400px' }}>
                {/* Background */}
                <rect width="400" height="500" fill="#FFFEF7"/>
                
                {/* Desk (viewed from above) */}
                <rect x="80" y="180" width="240" height="180" rx="12" fill="#D4A574" stroke="#B8956A" strokeWidth="2"/>
                
                {/* Book/Paper on desk */}
                <rect x="110" y="210" width="100" height="80" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5"/>
                
                {/* Study Time Text on Paper (handwritten style) */}
                <text x="160" y="255" textAnchor="middle" fontFamily="'Comic Sans MS', cursive" fontSize="24" fontWeight="600" fill="#F97316">
                  {person.totalHours || 0}시간
                </text>
                <text x="160" y="278" textAnchor="middle" fontFamily="'Comic Sans MS', cursive" fontSize="12" fill="#9CA3AF">
                  (동적 데이터)
                </text>
                
                {/* Notebook/Textbook */}
                <rect x="220" y="220" width="80" height="60" rx="3" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1.5"/>
                <line x1="230" y1="235" x2="290" y2="235" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2"/>
                <line x1="230" y1="245" x2="290" y2="245" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2"/>
                <line x1="230" y1="255" x2="290" y2="255" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2"/>
                
                {/* Pencil on desk */}
                <rect x="130" y="305" width="50" height="6" rx="3" fill="#FCD34D" transform="rotate(-25 155 308)"/>
                <polygon points="172,298 182,303 172,308" fill="#1F2937" transform="rotate(-25 177 303)"/>
                
                {/* Coffee cup */}
                <ellipse cx="280" cy="310" rx="15" ry="12" fill="#8B4513"/>
                <rect x="265" y="298" width="30" height="18" fill="#A0522D"/>
                <ellipse cx="280" cy="298" rx="15" ry="6" fill="#6B3410"/>
                
                {/* Owl Body (viewed from above, circular) */}
                <ellipse cx="200" cy="270" rx="55" ry="50" fill="#F97316" stroke="#EA580C" strokeWidth="2"/>
                
                {/* Owl Head (on top of body) */}
                <circle cx="200" cy="230" r="35" fill="#FB923C" stroke="#EA580C" strokeWidth="2"/>
                
                {/* Owl Eyes (looking down at desk) */}
                <ellipse cx="190" cy="228" rx="8" ry="10" fill="#FFFFFF"/>
                <ellipse cx="210" cy="228" rx="8" ry="10" fill="#FFFFFF"/>
                <circle cx="190" cy="230" r="5" fill="#1F2937"/>
                <circle cx="210" cy="230" r="5" fill="#1F2937"/>
                <circle cx="191" cy="228" r="2" fill="#FFFFFF"/>
                <circle cx="211" cy="228" r="2" fill="#FFFFFF"/>
                
                {/* Owl Beak */}
                <polygon points="200,235 196,242 204,242" fill="#FBBF24"/>
                
                {/* Owl Wings (spread on desk) */}
                <ellipse cx="160" cy="265" rx="20" ry="30" fill="#FB923C" stroke="#EA580C" strokeWidth="1.5" opacity="0.9"/>
                <ellipse cx="240" cy="265" rx="20" ry="30" fill="#FB923C" stroke="#EA580C" strokeWidth="1.5" opacity="0.9"/>
                
                {/* Effort indicators - sweat drops */}
                <ellipse cx="175" cy="215" rx="4" ry="6" fill="#60A5FA" opacity="0.7"/>
                <circle cx="175" cy="213" r="2" fill="#93C5FD" opacity="0.9"/>
                
                {/* Effort indicators - heat/focus lines */}
                <line x1="215" y1="205" x2="225" y2="195" stroke="#F97316" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                <line x1="220" y1="210" x2="232" y2="202" stroke="#F97316" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                <line x1="225" y1="215" x2="235" y2="210" stroke="#F97316" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                
                {/* Pencil in owl's wing/hand */}
                <rect x="235" y="260" width="30" height="4" rx="2" fill="#FCD34D"/>
                <polygon points="265,260 272,262 265,264" fill="#1F2937"/>
                
                {/* Desk shadow */}
                <ellipse cx="200" cy="365" rx="90" ry="15" fill="#E5E7EB" opacity="0.4"/>
                
                {/* Caption Text */}
                <text x="200" y="420" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="500" fill="#374151">
                  <tspan x="200" dy="0">학생 데이터님! 총 <tspan fontWeight="700" fill="#F97316">{person.totalHours || 0}</tspan>시간 만큼</tspan>
                  <tspan x="200" dy="22">라이브러리에서 보냈군요.</tspan>
                </text>
                
                {/* Decorative elements */}
                <circle cx="60" cy="80" r="3" fill="#FCD34D" opacity="0.5"/>
                <circle cx="340" cy="100" r="4" fill="#FB923C" opacity="0.5"/>
                <circle cx="50" cy="400" r="2" fill="#F97316" opacity="0.4"/>
                <circle cx="350" cy="420" r="3" fill="#FCD34D" opacity="0.5"/>
                
                {/* Small stars for effort */}
                <text x="165" y="200" fontFamily="Arial, sans-serif" fontSize="14" fill="#FBBF24" opacity="0.7">✨</text>
                <text x="225" y="195" fontFamily="Arial, sans-serif" fontSize="12" fill="#FBBF24" opacity="0.6">✨</text>
              </svg>
            </div>
          </div>
          
          {/* Supporting Text */}
          <div className="text-center rounded-lg p-8" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}>
            <p className="text-lg" style={{ color: 'var(--slate-gray)' }}>
              총 <span className="font-bold" style={{ color: 'var(--dark-navy)' }}>{person.totalStudents || 0}</span>명의 학생과 함께 
              <span className="font-bold" style={{ color: 'var(--sdij-primary)' }}> {(person.totalStudents || 0) * 800}</span>시간 동안 
              강의를 들으며 달려왔습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Meals Section */}
      <section className="py-16" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg p-8 text-center" style={{ backgroundColor: '#FAFAFA', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <div className="text-4xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.totalMeals || 0}
              </div>
              <div className="text-xl" style={{ color: '#111827' }}>총 끼니</div>
            </div>
            
            <div className="rounded-lg p-8 text-center" style={{ backgroundColor: '#FAFAFA', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>
                {person.favMeal || "김치찌개"}
              </div>
              <div className="text-lg" style={{ color: '#6B7280' }}>인기 메뉴</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TA Questions Section */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-5xl mx-auto">
          {/* Illustration */}
          <div className="text-center mb-12">
            <svg width="400" height="500" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className="mx-auto max-w-full h-auto">
              {/* Background */}
              <rect width="400" height="500" fill="#FFFFFF"/>
              
              {/* Top Text */}
              <text x="200" y="60" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="#002B5C">
                <tspan x="200" dy="0">올 한 해, 학생들이 TA에게</tspan>
                <tspan x="200" dy="25">얼마나 많은 질문을 했을까요?</tspan>
              </text>
              
              {/* Owl Body */}
              <ellipse cx="200" cy="280" rx="80" ry="70" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2"/>
              
              {/* Owl Head */}
              <circle cx="200" cy="220" r="50" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2"/>
              
              {/* Owl Eyes */}
              <circle cx="185" cy="210" r="12" fill="#002B5C"/>
              <circle cx="215" cy="210" r="12" fill="#002B5C"/>
              <circle cx="185" cy="208" r="4" fill="#FFFFFF"/>
              <circle cx="215" cy="208" r="4" fill="#FFFFFF"/>
              
              {/* Owl Beak */}
              <polygon points="200,220 195,235 205,235" fill="#F59E0B"/>
              
              {/* Owl Wings */}
              <ellipse cx="170" cy="280" rx="25" ry="40" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1.5"/>
              <ellipse cx="230" cy="280" rx="25" ry="40" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1.5"/>
              
              {/* Owl Feet */}
              <ellipse cx="185" cy="340" rx="8" ry="12" fill="#F59E0B"/>
              <ellipse cx="215" cy="340" rx="8" ry="12" fill="#F59E0B"/>
              
              {/* Question Card */}
              <rect x="100" y="160" width="200" height="80" rx="12" fill="#FFFFFF" stroke="#002B5C" strokeWidth="2"/>
              
              {/* Card Content */}
              <text x="200" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#002B5C">
                총 질문 수
              </text>
              <text x="200" y="210" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" fill="#002B5C">
                {person.questions || 0}개
              </text>
              <text x="200" y="230" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#6B7280">
                (동적 데이터)
              </text>
              
              {/* Question Marks around the card */}
              <text x="70" y="190" fontFamily="Arial, sans-serif" fontSize="20" fill="#002B5C" opacity="0.7">?</text>
              <text x="330" y="190" fontFamily="Arial, sans-serif" fontSize="20" fill="#002B5C" opacity="0.7">?</text>
              <text x="90" y="140" fontFamily="Arial, sans-serif" fontSize="16" fill="#002B5C" opacity="0.5">?</text>
              <text x="310" y="140" fontFamily="Arial, sans-serif" fontSize="16" fill="#002B5C" opacity="0.5">?</text>
              
              {/* Bottom Caption */}
              <text x="200" y="420" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fill="#374151">
                <tspan x="200" dy="0">총 <tspan fontWeight="600" fill="#002B5C">{person.totalStudents || 0}</tspan>명의 학생과</tspan>
                <tspan x="200" dy="20"><tspan fontWeight="600" fill="#002B5C">{person.questions || 0}</tspan>개의 질문을 하며 달려왔습니다.</tspan>
              </text>
              
              {/* Decorative Elements */}
              <circle cx="80" cy="80" r="3" fill="#002B5C" opacity="0.3"/>
              <circle cx="320" cy="100" r="2" fill="#002B5C" opacity="0.3"/>
              <circle cx="60" cy="400" r="2" fill="#002B5C" opacity="0.3"/>
              <circle cx="340" cy="380" r="3" fill="#002B5C" opacity="0.3"/>
            </svg>
          </div>
          
          {/* Additional Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Average Questions per Student */}
            <div className="p-6 rounded-2xl shadow-lg" style={{ background: '#F9FAFB', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center" style={{ background: '#002B5C' }}>
                  <i className="fas fa-calculator text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--darkest-gray)' }}>학생당 평균 질문</h3>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002B5C' }}>
                  {person.questions && person.totalStudents ? Math.round(person.questions / person.totalStudents) : 0}
                </div>
                <p className="text-sm" style={{ color: 'var(--dark-gray)' }}>개</p>
              </div>
            </div>
            
            {/* Most Active Month */}
            <div className="p-6 rounded-2xl shadow-lg" style={{ background: '#F9FAFB', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center" style={{ background: '#002B5C' }}>
                  <i className="fas fa-calendar-alt text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--darkest-gray)' }}>가장 활발한 월</h3>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002B5C' }}>11</div>
                <p className="text-sm" style={{ color: 'var(--dark-gray)' }}>월</p>
              </div>
            </div>
            
            {/* Question Categories */}
            <div className="p-6 rounded-2xl shadow-lg" style={{ background: '#F9FAFB', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center" style={{ background: '#002B5C' }}>
                  <i className="fas fa-tags text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--darkest-gray)' }}>인기 질문 유형</h3>
                <div className="text-xl font-bold mb-1" style={{ color: '#002B5C' }}>수학</div>
                <p className="text-sm" style={{ color: 'var(--dark-gray)' }}>관련 질문</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Check-in/Check-out Section */}
      <section className="py-16" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--darkest-gray)' }}>출결 패턴</h2>
            <p style={{ color: 'var(--dark-gray)' }}>평균 등원·하원 시간을 확인하세요</p>
          </div>
          
          {/* Illustration Card */}
          <div className="rounded-lg p-12" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}>
            <div className="text-center">
              <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="mx-auto max-w-full h-auto" style={{ maxWidth: '500px' }}>
                {/* Background */}
                <rect width="400" height="400" fill="#FFFEF7"/>
                
                {/* Main Card Container */}
                <rect x="30" y="60" width="340" height="280" rx="16" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2"/>
                
                {/* Left Box (Check-in / 등원) */}
                <rect x="50" y="90" width="140" height="160" rx="12" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1.5"/>
                
                {/* Sun Icon */}
                <circle cx="120" cy="140" r="25" fill="#FBBF24"/>
                {/* Sun rays */}
                <line x1="120" y1="105" x2="120" y2="95" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                <line x1="120" y1="185" x2="120" y2="175" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                <line x1="85" y1="140" x2="95" y2="140" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                <line x1="155" y1="140" x2="145" y2="140" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                <line x1="95" y1="115" x2="102" y2="122" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                <line x1="145" y1="165" x2="138" y2="158" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                <line x1="95" y1="165" x2="102" y2="158" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                <line x1="145" y1="115" x2="138" y2="122" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                
                {/* Check-in Time Text */}
                <text x="120" y="195" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" fill="#92400E">
                  평균 등원 시간
                </text>
                <text x="120" y="220" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" fill="#002B5C">
                  {person.avgCheckIn || "08:00"}
                </text>
                <text x="120" y="235" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#9CA3AF">
                  (동적 데이터)
                </text>
                
                {/* Right Box (Check-out / 하원) */}
                <rect x="210" y="90" width="140" height="160" rx="12" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5"/>
                
                {/* Moon Icon */}
                <circle cx="280" cy="140" r="25" fill="#60A5FA"/>
                <circle cx="290" cy="135" r="22" fill="#DBEAFE"/>
                {/* Stars */}
                <circle cx="260" cy="125" r="2" fill="#FBBF24"/>
                <circle cx="265" cy="115" r="1.5" fill="#FBBF24"/>
                <circle cx="300" cy="120" r="1.5" fill="#FBBF24"/>
                <text x="258" y="130" fontFamily="Arial, sans-serif" fontSize="10" fill="#FBBF24">✨</text>
                <text x="298" y="125" fontFamily="Arial, sans-serif" fontSize="8" fill="#FBBF24">✨</text>
                
                {/* Check-out Time Text */}
                <text x="280" y="195" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" fill="#1E3A8A">
                  평균 하원 시간
                </text>
                <text x="280" y="220" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" fill="#002B5C">
                  {person.avgCheckOut || "22:00"}
                </text>
                <text x="280" y="235" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#9CA3AF">
                  (동적 데이터)
                </text>
                
                {/* Shadow effects */}
                <ellipse cx="120" cy="255" rx="50" ry="8" fill="#FCD34D" opacity="0.2"/>
                <ellipse cx="280" cy="255" rx="50" ry="8" fill="#93C5FD" opacity="0.2"/>
                
                {/* Caption Text */}
                <text x="200" y="310" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#374151">
                  <tspan x="200" dy="0"><tspan fontWeight="700" fill="#002B5C">{person.name || '학생 데이터'}</tspan>님은, 평균적으로 라이브러리에</tspan>
                  <tspan x="200" dy="18"><tspan fontWeight="700" fill="#F59E0B">{person.avgCheckIn || '08:00'}</tspan>에 등원하여, <tspan fontWeight="700" fill="#3B82F6">{person.avgCheckOut || '22:00'}</tspan>에 하원하였습니다.</tspan>
                </text>
                
                {/* Decorative elements */}
                <circle cx="60" cy="80" r="3" fill="#FBBF24" opacity="0.5"/>
                <circle cx="340" cy="85" r="2.5" fill="#60A5FA" opacity="0.5"/>
                <circle cx="50" cy="350" r="2" fill="#002B5C" opacity="0.3"/>
                <circle cx="350" cy="360" r="3" fill="#002B5C" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Focus Score Section */}
      <section className="py-16" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--darkest-gray)' }}>공부 몰입도</h2>
            <p style={{ color: 'var(--dark-gray)' }}>1년간의 평균 공부 집중도를 확인하세요</p>
          </div>
          
          {/* Gauge Card */}
          <div className="rounded-lg p-12" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}>
            <div className="text-center">
              <svg width="400" height="450" viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg" className="mx-auto max-w-full h-auto" style={{ maxWidth: '500px' }}>
                <defs>
                  {/* Gradient for the gauge */}
                  <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#EF4444', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Background */}
                <rect width="400" height="450" fill="#FFFEF7"/>
                
                {/* Title */}
                <text x="200" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="#002B5C">
                  평균 공부 몰입도
                </text>
                
                {/* Gauge Background (Gray Arc) */}
                <path d="M 80 250 A 120 120 0 0 1 320 250" 
                      fill="none" 
                      stroke="#E5E7EB" 
                      strokeWidth="24" 
                      strokeLinecap="round"/>
                
                {/* Gauge Progress (Gradient Arc) - Dynamic based on score */}
                <path d={(() => {
                  const avgFocus = person.focusScore || 75;
                  const percentage = Math.min(Math.max(avgFocus, 0), 100);
                  const angle = (percentage / 100) * 180;
                  const startX = 80;
                  const startY = 250;
                  const radius = 120;
                  const endAngle = angle * (Math.PI / 180);
                  const endX = 200 - radius * Math.cos(endAngle);
                  const endY = 250 - radius * Math.sin(endAngle);
                  const largeArcFlag = angle > 180 ? 1 : 0;
                  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
                })()}
                      fill="none" 
                      stroke="url(#gaugeGradient)" 
                      strokeWidth="24" 
                      strokeLinecap="round"/>
                
                {/* Center Circle */}
                <circle cx="200" cy="250" r="90" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2"/>
                
                {/* Score Display */}
                <text x="200" y="235" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="700" fill="#002B5C">
                  {person.focusScore || 75}
                </text>
                <text x="200" y="260" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="400" fill="#6B7280">
                  / 100
                </text>
                
                {/* Min Label */}
                <text x="60" y="275" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="#6B7280">
                  0
                </text>
                
                {/* Max Label */}
                <text x="340" y="275" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="#6B7280">
                  100
                </text>
                
                {/* Pointer/Needle */}
                <g transform={`rotate(${-90 + ((person.focusScore || 75) / 100) * 180} 200 250)`}>
                  <line x1="200" y1="250" x2="200" y2="170" stroke="#002B5C" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="200" cy="250" r="8" fill="#002B5C"/>
                  <circle cx="200" cy="250" r="4" fill="#FFFFFF"/>
                </g>
                
                {/* Decorative Score Indicators */}
                <circle cx="80" cy="250" r="4" fill="#E5E7EB"/>
                <circle cx="140" cy="160" r="3" fill="#E5E7EB"/>
                <circle cx="200" cy="130" r="3" fill="#E5E7EB"/>
                <circle cx="260" cy="160" r="3" fill="#E5E7EB"/>
                <circle cx="320" cy="250" r="4" fill="#E5E7EB"/>
                
                {/* Caption Text */}
                <text x="200" y="330" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#9CA3AF">
                  (동적 데이터)
                </text>
                
                <text x="200" y="370" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#374151">
                  <tspan x="200" dy="0">그동안, 공부 몰입도는 평균적으로</tspan>
                  <tspan x="200" dy="20"><tspan fontWeight="700" fill="#EF4444">0</tspan> ~ <tspan fontWeight="700" fill="#10B981">100</tspan> 중 <tspan fontWeight="700" fill="#002B5C">{person.focusScore || 75}</tspan>로</tspan>
                  <tspan x="200" dy="20">공부를 하며 일 년을 달려왔습니다.</tspan>
                </text>
                
                {/* Decorative elements */}
                <circle cx="50" cy="50" r="3" fill="#002B5C" opacity="0.3"/>
                <circle cx="350" cy="60" r="2.5" fill="#10B981" opacity="0.3"/>
                <circle cx="60" cy="420" r="2" fill="#F59E0B" opacity="0.3"/>
                <circle cx="340" cy="430" r="3" fill="#002B5C" opacity="0.3"/>
                
                {/* Shadow under gauge */}
                <ellipse cx="200" cy="260" rx="100" ry="10" fill="#000000" opacity="0.05"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Solved Problems Section */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#111827' }}>과목별 해결한 문제</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Korean */}
            <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#FAFAFA', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.solvedKorean || 45}
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>국어</div>
            </div>
            
            {/* Math */}
            <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#FAFAFA', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.solvedMath || 42}
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>수학</div>
            </div>
            
            {/* English */}
            <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#FAFAFA', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.solvedEnglish || 48}
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>영어</div>
            </div>
            
            {/* Biology */}
            <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#FAFAFA', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.solvedBiology || 40}
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>생명</div>
            </div>
            
            {/* Geography */}
            <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#FAFAFA', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.solvedGeography || 38}
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>지구</div>
            </div>
            
            {/* Total */}
            <div className="rounded-lg p-6 text-center border-2" style={{ backgroundColor: '#FAFAFA', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderColor: '#00458C' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#00458C' }}>
                {(person.solvedKorean || 0) + (person.solvedMath || 0) + (person.solvedEnglish || 0) + (person.solvedBiology || 0) + (person.solvedGeography || 0)}
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>총 문제</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemoirRecap;