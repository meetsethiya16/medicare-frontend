import { useState } from "react";

const TestComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email is ${email} and Password is ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="container">
        <form className="flex flex-col gap-5">
          <label className="pr-9" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="pr-9" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="btn h-fit w-fit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default TestComponent;
