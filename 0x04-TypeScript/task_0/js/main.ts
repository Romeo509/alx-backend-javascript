// Interface for Student data
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 30,
    location: "London",
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Function to create and append a table row
  function createTableRow(student: Student): HTMLTableRowElement {
    const tableRow = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    tableRow.appendChild(firstNameCell);
    tableRow.appendChild(locationCell);
  
    return tableRow;
  }
  
  // Get a reference to the table body element (assuming it exists with id="student-table-body")
  const tableBody = document.getElementById("student-table-body");
  
  // Loop through studentsList and append rows to the table
  studentsList.forEach((student) => {
    const tableRow = createTableRow(student);
    tableBody?.appendChild(tableRow); // Optional chaining to handle potential null
  });
  