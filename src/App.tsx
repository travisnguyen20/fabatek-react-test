import * as React from "react";
import "./styles.scss";

import { User } from "./types";

export default function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [registeredUser, setRegisteredUser] = React.useState<User | null>(null);

  const handleRegister = React.useCallback(() => {
    /** Call RegisterUser with the name, email, password fields */
    /** Then set register user to react state */
  }, [name, email, password, setRegisteredUser]);

  return (
    <div className="App my-5">
      <h1>Hello Candidate!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={handleRegister} className="w-50 mx-auto my-5">
        <div className="form-group">
          <input
            className="form-control"
            value={name}
            placeholder="Name"
            onChange={e => setName(e.currentTarget.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.currentTarget.value)}
            type="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.currentTarget.value)}
            type="password"
            required
          />
        </div>
      </form>
      {registeredUser && (
        <h4>You are registered! and assigned a user id {registeredUser.id}</h4>
      )}
      <button className="btn btn-primary">Register</button>
    </div>
  );
}
