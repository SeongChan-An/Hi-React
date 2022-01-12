import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Clayful from "clayful/client-js";

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    Customer.createMe(payload, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }

      // 회원가입 후 result로 결과 반환
      // var data = result.data;
      // console.log(data);
      navigate("/login");
    });
  };

  return (
    <div className="auth-wrapper">
      <h1>회원가입.</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Apple ID"
          type="email"
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
        <button type="submit">회원가입.</button>
        <Link to="login" style={{ color: "gray", textDecoration: "none" }}>
          이미 Apple ID가 있다면? 지금 로그인.{" "}
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
