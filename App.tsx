import React from 'react';
import MemoirRecap from './MemoirRecap';
import { Person } from './types';

// Example student data
const examplePerson: Person = {
  name: "김철수",
  totalDays: 365,
  startDate: "2/15일",
  endDate: "11/13",
  totalHours: 8760,
  totalStudents: 1500,
  totalMeals: 1095,
  favMeal: "김치찌개",
  totalTAQuestions: 150,
  avgCheckIn: "08:00",
  avgCheckOut: "22:00",
  focusScore: 95,
  solvedKorean: 45,
  solvedMath: 42,
  solvedEnglish: 48,
  solvedBiology: 40,
  solvedGeography: 38
};

const App: React.FC = () => {
  return (
    <div className="App">
      <MemoirRecap person={examplePerson} />
    </div>
  );
};

export default App;
