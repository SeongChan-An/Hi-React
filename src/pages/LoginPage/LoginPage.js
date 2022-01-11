import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="auth-wrapper">
      <h1>로그인.</h1>
      <form>
        <input
          placeholder="Apple 아이디"
          type="Apple ID"
          name="email"
          value=""
        />
        <input
          placeholder="Apple PW"
          type="password"
          name="password"
          value=""
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
