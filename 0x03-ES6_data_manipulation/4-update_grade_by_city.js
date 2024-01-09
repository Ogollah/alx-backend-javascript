#!/usr/bin/node

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((g) => g.studentId === student.id);
      const grade = matchingGrade ? matchingGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
