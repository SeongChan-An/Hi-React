import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Clayful from "clayful/client-js";
import { AuthContext } from "../../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePW = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    // Page reresth 방지
    event.preventDefault();

    var Customer = Clayful.Customer;

    var payload = {
      email,
      password,
    };

    Customer.authenticate(payload, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }
      let data = result.data;
      localStorage.setItem("customUid", data.customer);
      localStorage.setItem("accessToken", data.token);
      navigate("/");
      isAuthenticated();
    });
  };

  return (
    <div className="auth-wrapper">
      <h1>로그인.</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Apple 아이디"
          type="Apple ID"
          name="email"
          value={email}
        />
        <input
          onChange={handleChangePW}
          placeholder="Apple PW"
          type="password"
          name="password"
          value={password}
        />
        <p>
          Apple ID는 iTunes, App Store, iCloud에 로그인할 때 사용하는 이메일
          주소입니다.
        </p>
        <button type="submit">로그인.</button>
        <Link to="login" style={{ color: "gray", textDecoration: "none" }}>
          Apple ID가 없으신가요? 지금 생성.{" "}
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
