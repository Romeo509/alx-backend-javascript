// function to returns the sum of all the student ids.
export default function getStudentIdsSum(students) {
  return students.reduce((agg, student) => agg + student.id, 0);
}
