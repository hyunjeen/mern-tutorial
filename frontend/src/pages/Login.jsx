import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { reset } from "../features/auth/authSlice";
import { login } from "../features/auth/authThunk";
import { useEffect } from "react";
import { Spinner } from "../components/Spinner";

const Login = () => {
  const [toggle, Toggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoding, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isLoding, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("add filed email");
      return;
    }
    if (!password) {
      toast.error("add filed password");
      return;
    }
    const userData = { email, password };
    dispatch(login(userData));
  };

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const toggleHandler = () => {
    Toggle((prev) => !prev);
  };
  if (isLoding) {
    return <Spinner />;
  }
  const { email, password } = formData;
  return (
    <section className="heading">
      <h1>
        <FaUser />
        Login
      </h1>
      <p>please Login</p>
      <form onSubmit={onSubmit}>
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
          <button type="submit">로그인</button>
          <button type="button">취소</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
