document.addEventListener('DOMContentLoaded', function () {
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  // 예시 데이터
  const sample = {
    studentName: '김채이',
    totalDays: 150,
    campusName: 'N',
    className: 'S',
    totalHours: 1200,
    avgSongs: 300,
    libraryHours: 1200,
    examCount: 3,
    focusScore: 8.7,
    mealCount: 1234,
    mealCampusName: '태성관',
    totalProblems: 50000,
    totalTAQuestions: 10000,
    taMeetHours: 12,
    saMeetHours: 8,
    startDate: '2024.02.15',
    endDate: '2024.11.13'
  };

  // 공통 바인딩
  setText('studentNameOutput', sample.studentName);
  setText('totalDays', String(sample.totalDays));
  setText('campusNameOutput', sample.campusName);
  setText('classNameOutput', sample.className);

  setText('totalHours', String(sample.totalHours));
  setText('avgSongs', String(sample.avgSongs));

  setText('libraryHours', String(sample.libraryHours));
  setText('examCount', String(sample.examCount));
  setText('focusScore', String(sample.focusScore));

  setText('mealCount', String(sample.mealCount));
  setText('mealCampusName', sample.mealCampusName);

  setText('totalProblems', String(sample.totalProblems));

  setText('totalTAQuestions', String(sample.totalTAQuestions));
  setText('taMeetHours', String(sample.taMeetHours));
  setText('saMeetHours', String(sample.saMeetHours));

  setText('startDate', sample.startDate);
  setText('endDate', sample.endDate);
});
  