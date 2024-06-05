// Extending Teacher Class (Task 1)
interface Directors extends Teacher {
    workTasks(): any;
    numberOfReports: number;
  }
  
  // Printing Teachers (Task 1)
  interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
  }
  
  // Student Class (Task 1)
  interface StudentConstructor {
    new (firstName: string, lastName: string): Student;
  }
  
  class Student {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Advanced Types - Part 1 (Task 2)
  type Subjects = 'Math' | 'History';
  
  function teachClass(todayClass: Subjects): string {
    switch (todayClass) {
      case 'Math':
        return 'Teaching Math';
      case 'History':
        return 'Teaching History';
      default:
        return 'Invalid subject';
    }
  }
  
  // Advanced Types - Part 2 (Task 2)
  // (Assuming interface definitions are in a separate file like interface.ts)
  // Import interface definitions here (if applicable)
  
  // Employee Roles (Task 2)
  function createEmployee(salary: number | string): Employee {
    if (typeof salary === 'number' && salary < 500) {
      return new teacher();
    }
    return new director();
  }
  
  function isDirector(employee: Employee): employee is Directors {
    return 'workTasks' in employee && employee.workTasks === 'Getting to director tasks';
  }
  
  function executeWork(employee: Employee): void {
    if (isDirector(employee)) {
      console.log(employee.workTasks()); // Call Director's workTasks
    } else {
      console.log(employee.workTasks()); // Call Teacher's workTasks
    }
  }
  
  // Example Usage
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(printTeacher(director1.firstName, director1.lastName)); // Output: J. Doe
  
  const student1 = new Student('Alice', 'Smith');
  console.log(student1.workOnHomework()); // Output: Currently working
  console.log(student1.displayName()); // Output: Alice
  
  console.log(teachClass('Math')); // Output: Teaching Math
  console.log(teachClass('History')); // Output: Teaching History
  
  const teacher = createEmployee(200);
  const director = createEmployee(1000);
  
  console.log(executeWork(teacher)); // Output: Getting to work
  console.log(executeWork(director)); // Output: Getting to director tasks
  