import React from "react";
import axios from "axios";
import illustration from "./illustration1.gif";

export default function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const authObject = {
      "Project-Id": "3f9da798-6930-4e6a-8442-863f418d85b2",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Wrong Credentials, try again!");
    }
  }

  return (
    <main>
      <h1 className="tagline">Converse, Confer & Create</h1>
      <div className="wrapper">
        <img src={illustration} className="illustration"></img>
        <div className="form">
          <h1 className="title">Gossip-Mania</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Username"
              required
            />
            <input
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="input"
              required
            />
            <div align="center">
              <button className="button" type="submit">
                <span>Login</span>
              </button>
            </div>
            <h3 className="error">{error}</h3>
          </form>
        </div>
      </div>
    </main>
  );
}
