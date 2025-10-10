// File: src/components/MemoirRecap.tsx

import React from 'react';

// TypewriterText component placeholder
const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  return <div className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>{text}</div>;
};

// MemoirRecap component
const MemoirRecap: React.FC<{ person: any }> = ({ person }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Opening Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-lg border border-gray-200" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>부엉이 여러분, 수고 많으셨습니다.</h2>
            </div>
            
            <div className="leading-relaxed space-y-4 text-left" style={{ color: '#111827' }}>
              <TypewriterText text="학생님이 달려온 시간을 회고하는 [Memoir]" />
              
              <p className="text-base italic" style={{ color: '#6B7280' }}>
                📝 'memoir'는 유명인의 회고록이라는 뜻을 지녔습니다.
              </p>
              
              <p className="text-base leading-relaxed" style={{ color: '#111827' }}>
                시대인재는 여러분 하나하나를 존중하고, 여러분이 시대인재와 함께한 시간의 가치를 간과하지 않기에 그동안 달려온 시간을 회고해보고자 했습니다.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="text-center">
                <button className="px-6 py-3 rounded-lg font-semibold transition-colors" style={{ backgroundColor: '#111827', color: 'white' }}>
                  <i className="fas fa-heart mr-2"></i>
                  시대인재와 함께한 소중한 시간
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Time Timeline Section */}
      <section className="py-16" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              {/* Start Card */}
              <div className="rounded-lg border border-gray-200 p-6 min-w-[200px] text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
                <h3 className="text-sm font-medium mb-2" style={{ color: '#111827' }}>시대인재 N 처음 만난 날</h3>
                <p className="text-2xl font-bold" style={{ color: '#111827' }}>{person.startDate || "2/1X일"}</p>
              </div>
              
              {/* Connector Line */}
              <div className="flex-1 h-px mx-8 relative" style={{ backgroundColor: '#E5E7EB' }}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4" style={{ backgroundColor: '#F9FAFB' }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E5E7EB' }}></div>
                </div>
              </div>
              
              {/* End Card */}
              <div className="rounded-lg border border-gray-200 p-6 min-w-[200px] text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
                <h3 className="text-sm font-medium mb-2" style={{ color: '#111827' }}>The End</h3>
                <p className="text-2xl font-bold" style={{ color: '#111827' }}>{person.endDate || "11/13"}</p>
              </div>
            </div>
            
            {/* Total Days Metric */}
            <div className="text-center">
              <p className="text-xl" style={{ color: '#111827' }}>
                총 <span className="font-bold" style={{ color: '#00458C' }}>{person.totalDays || 0}</span>일 함께했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. Summary Section (Additional Text) */}
      <section className="py-8 px-6">
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
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg p-8 mb-6" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
            <div className="flex items-center justify-between">
              {/* Metric (Left) */}
              <div className="flex-1">
                <div className="text-8xl font-bold" style={{ color: '#00458C' }}>
                  {person.totalHours || 0}
                </div>
                <div className="text-2xl font-semibold" style={{ color: '#111827' }}>시간</div>
              </div>
              
              {/* Illustration (Right) */}
              <div className="flex-1 text-center">
                <div className="text-6xl mb-4">🦉📝</div>
                <p style={{ color: '#6B7280' }}>Owl and Pen Illustration</p>
              </div>
            </div>
          </div>
          
          {/* Supporting Text */}
          <div className="text-center" style={{ color: '#111827' }}>
            <p className="text-lg">
              총 <span className="font-semibold">{person.totalStudents || 0}</span>명의 학생과 함께 
              <span className="font-semibold"> {(person.totalStudents || 0) * 800}</span>시간 동안 
              강의를 들으며 달려왔습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Meals Section */}
      <section className="py-16" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg p-8 text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-4xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.totalMeals || 0}
              </div>
              <div className="text-xl" style={{ color: '#111827' }}>총 끼니</div>
            </div>
            
            <div className="rounded-lg p-8 text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>
                {person.favMeal || "김치찌개"}
              </div>
              <div className="text-lg" style={{ color: '#6B7280' }}>인기 메뉴</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TA Questions Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg p-12 text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
            <div className="text-6xl font-bold mb-4" style={{ color: '#00458C' }}>
              {person.totalTAQuestions || 0}
            </div>
            <div className="text-2xl font-semibold" style={{ color: '#111827' }}>총 질문 수</div>
            <div className="text-lg mt-2" style={{ color: '#6B7280' }}>TA에게 질문한 횟수</div>
          </div>
        </div>
      </section>

      {/* 6. Personal Data & Focus Score */}
      <section className="py-16" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Check-in Card */}
            <div className="rounded-lg p-8 text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.avgCheckIn || "08:00"}
              </div>
              <div className="text-lg" style={{ color: '#111827' }}>평균 등원 시각</div>
            </div>
            
            {/* Check-out Card */}
            <div className="rounded-lg p-8 text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.avgCheckOut || "22:00"}
              </div>
              <div className="text-lg" style={{ color: '#111827' }}>평균 하원 시각</div>
            </div>
            
            {/* Focus Score Card */}
            <div className="rounded-lg p-8" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold mb-2" style={{ color: '#00458C' }}>
                  {person.focusScore || 95}%
                </div>
                <div className="text-lg" style={{ color: '#111827' }}>집중도</div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full rounded-full h-4" style={{ backgroundColor: '#E5E7EB' }}>
                <div 
                  className="h-4 rounded-full transition-all duration-500" 
                  style={{ 
                    backgroundColor: '#00458C', 
                    width: `${person.focusScore || 95}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Solved Problems Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#111827' }}>과목별 해결한 문제</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Korean */}
            <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.solvedKorean || 45}
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>국어</div>
            </div>
            
            {/* Math */}
            <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.solvedMath || 42}
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>수학</div>
            </div>
            
            {/* English */}
            <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.solvedEnglish || 48}
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>영어</div>
            </div>
            
            {/* Biology */}
            <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.solvedBiology || 40}
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>생명</div>
            </div>
            
            {/* Geography */}
            <div className="rounded-lg p-6 text-center" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#00458C' }}>
                {person.solvedGeography || 38}
              </div>
              <div className="text-sm" style={{ color: '#6B7280' }}>지구</div>
            </div>
            
            {/* Total */}
            <div className="rounded-lg p-6 text-center border-2" style={{ backgroundColor: '#F9FAFB', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)', borderColor: '#00458C' }}>
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