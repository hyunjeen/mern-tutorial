import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import { Spinner } from "../components/Spinner";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { isError, isLoading, message, goals } = useSelector(
    (state) => state.goal
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, isError, message]);
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
        <GoalForm />
        {isLoading ? (
          <Spinner />
        ) : (
          <ul>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Dashboard;
