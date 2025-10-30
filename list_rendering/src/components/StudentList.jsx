
import "./StudentList.css";

const StudentList = () => {
  const students = [
    { id: 1, name: "John", grade: "A" },
    { id: 2, name: "Emma", grade: "B" },
    { id: 3, name: "Liam", grade: "A" },
    { id: 4, name: "Olivia", grade: "C" },
  ];

  return (
    <div className="student-container">
      <h2 className="student-title">Student List</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
