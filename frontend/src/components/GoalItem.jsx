import { memo } from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalThunk";

const GoalItem = memo(({ goal }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteGoal(goal._id));
  };

  if (!goal) {
    return <p>No data</p>;
  }

  return (
    <li className={"list-item"}>
      <time>{new Date(goal.createdAt).toLocaleString("ko-KR")}</time>
      <p>{goal.text}</p>
      <button onClick={onClick}>delete</button>
    </li>
  );
});

export default GoalItem;
