import Form from "./components/Form";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import schema from "./components/formSchema";
import * as yup from "yup";

const initalFormData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  ToS_agreed: false,
};

function App() {
  const [formData, setFormData] = useState(initalFormData);
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
      ToS_agreed: formData.ToS_agreed,
    };
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => setUsers([...users, res.data]))
      .catch((err) => console.log(err))
      .finally(() => setFormData(initalFormData));
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formData).then((valid) => setDisabled(!valid));
  }, [formData]);

  return (
    <div className="App">
      <Form
        updateFormData={setFormData}
        formData={formData}
        updateUsers={setUsers}
        submit={handleSubmit}
        change={handleChange}
        disabled={disabled}
      />
      {users.map((user) => {
        return <pre key={user.id}>{JSON.stringify(user)}</pre>;
      })}
    </div>
  );
}

export default App;
