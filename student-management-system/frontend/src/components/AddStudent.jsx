import React, { useEffect, useState } from "react";
import api from "../axiosConfig";

function AddStudent({ fetchStudents, editStudent, clearEditStudent }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editStudent) {
        await api.put(`/${editStudent.id}`, student);
        clearEditStudent();
      } else {
        await api.post("", student);
      }

      setStudent({
        name: "",
        email: "",
        course: "",
      });

      fetchStudents();
    } catch (error) {
      console.error("Error saving student:", error);
      alert("Error while saving student");
    }
  };

  const handleClear = () => {
    setStudent({
      name: "",
      email: "",
      course: "",
    });
    clearEditStudent();
  };

  return (
    <div className="form-container">
      <h2>{editStudent ? "Update Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Enter course"
          value={student.course}
          onChange={handleChange}
          required
        />

        <div className="button-group">
          <button type="submit">
            {editStudent ? "Update Student" : "Add Student"}
          </button>

          <button type="button" className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;