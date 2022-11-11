import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Grrrr</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button onClick={logoutHandler}>
              <FaSignInAlt /> logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaSignOutAlt /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
