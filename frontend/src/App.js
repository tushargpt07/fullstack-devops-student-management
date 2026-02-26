import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const API = "http://3.6.94.247:8080/api/students";

  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  const addStudent = async () => {
    if (!name || !email) return;
    await axios.post(API, { name, email });
    setName("");
    setEmail("");
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h1>Student Management System</h1>
      <p>Total Students: {students.length}</p>

      <div className="form">
        <input
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>
                <button className="delete" onClick={() => deleteStudent(s.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
