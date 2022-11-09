import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BiShowAlt, BiHide } from "react-icons/bi";

const Register = () => {
  const [toggle, Toggle] = useState(false);
  const [toggle2, Toggle2] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
  const toggleHandler2 = () => {
    Toggle2((prev) => !prev);
  };
  const { name, email, password, password2 } = formData;
  return (
    <section className="heading">
      <h1>
        <FaUser />
        Register
      </h1>
      <p>please create an account</p>
      <form>
        <div className="form-group">
          <div className="item">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="이름"
              onChange={onChange}
            />
          </div>
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
          <div className="item">
            <input
              type={toggle2 ? "password" : "text"}
              name="password2"
              value={password2}
              placeholder="비밀번호 확인"
              onChange={onChange}
            />
            <div className="password-show">
              {toggle2 ? (
                <BiHide onClick={toggleHandler2} />
              ) : (
                <BiShowAlt onClick={toggleHandler2} />
              )}
            </div>
          </div>
        </div>
        <div className="button-group">
          <button disabled>회원가입</button>
          <button type="button">취소</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
