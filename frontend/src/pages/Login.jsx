import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BiShowAlt, BiHide } from "react-icons/bi";

const Login = () => {
  const [toggle, Toggle] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const toggleHandler = () => {
    Toggle((prev) => !prev);
  };
  const { email, password } = formData;
  return (
    <section className="heading">
      <h1>
        <FaUser />
        Login
      </h1>
      <p>please Login</p>
      <form>
        <div className="form-group">
          <div className="item">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="이메일"
              onChange={onChange}
            />
          </div>
          <div className="item">
            <input
              type={toggle ? "text" : "password"}
              name="password"
              value={password}
              placeholder="비밀번호"
              onChange={onChange}
            />
            <div className="password-show">
              {toggle ? (
                <BiHide onClick={toggleHandler} />
              ) : (
                <BiShowAlt onClick={toggleHandler} />
              )}
            </div>
          </div>
        </div>
        <div className="button-group">
          <button disabled>로그인</button>
          <button type="button">취소</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
