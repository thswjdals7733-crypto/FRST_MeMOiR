// Type definitions for MemoirRecap component

export interface Person {
  // 기본 정보
  name?: string;
  campus?: string;
  className?: string;
  
  // 학생 수 정보
  totalStudents?: number;
  campusStudents?: number;
  classStudents?: number;
  
  // 시간 관련
  totalDays?: number;
  startDate?: string;
  endDate?: string;
  totalHours?: number;
  
  // 생활 정보
  totalMeals?: number;
  favMeal?: string;
  
  // 질문 및 학습
  totalTAQuestions?: number;
  questions?: number;
  
  // 개인 패턴
  avgCheckIn?: string;
  avgCheckOut?: string;
  focusScore?: number;
  
  // 과목별 성취
  solvedKorean?: number;
  solvedMath?: number;
  solvedEnglish?: number;
  solvedBiology?: number;
  solvedGeography?: number;
}

// Example usage:
// const person: Person = {
//   // 기본 정보
//   name: "김철수",
//   campus: "강남캠퍼스",
//   className: "3반",
//   
//   // 학생 수 정보
//   totalStudents: 1500,
//   campusStudents: 800,
//   classStudents: 25,
//   
//   // 시간 관련
//   totalDays: 365,
//   startDate: "2/15일",
//   endDate: "11/13",
//   totalHours: 8760,
//   
//   // 생활 정보
//   totalMeals: 1095,
//   favMeal: "김치찌개",
//   
//   // 질문 및 학습
//   totalTAQuestions: 150,
//   questions: 150,
//   
//   // 개인 패턴
//   avgCheckIn: "08:00",
//   avgCheckOut: "22:00",
//   focusScore: 95,
//   
//   // 과목별 성취
//   solvedKorean: 45,
//   solvedMath: 42,
//   solvedEnglish: 48,
//   solvedBiology: 40,
//   solvedGeography: 38
// };
