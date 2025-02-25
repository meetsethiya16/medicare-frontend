import { useState } from "react";

const TestComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState({});

  const validateUser = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Enter valid name";
    }
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Enter valid email";
    }
    if (!password.trim() || password.length < 6) {
      newErrors.password = "Enter valid password of at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateUser()) return; // Stop execution if validation fails

    const userDetails = {
      name,
      email,
      password,
      time: new Date(),
    };

    console.log(userDetails); // ✅ Now this will always log if validation passes
    setOutput("Registered Successfully");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="container">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            gap: "20px",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <small style={{ color: "red" }}>{errors.email}</small>
          )}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <small style={{ color: "red" }}>{errors.password}</small>
          )}
          <button type="button" onClick={handleSubmit}>
            Register
          </button>
          {output && <small style={{ color: "red" }}>{output}</small>}
        </form>
      </div>
    </>
  );
};

export default TestComponent;
