import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./axiosConfig";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await api.get("");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const clearEditStudent = () => {
    setEditStudent(null);
  };

  return (
    <div className="app">
      <div className="main-container">
        <div className="header">
          <h1>Student Management System</h1>
          <p>Add, update, delete and store student data dynamically</p>
        </div>

        <AddStudent
          fetchStudents={fetchStudents}
          editStudent={editStudent}
          clearEditStudent={clearEditStudent}
        />

        <StudentList
          students={students}
          fetchStudents={fetchStudents}
          setEditStudent={setEditStudent}
        />
      </div>
    </div>
  );
}

export default App;