// import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../features/goals/goalSlice";
import { createGoal, getGoals } from "../features/goals/goalThunk";
const GoalForm = () => {
  // const { goals } = useSelector((state) => state.goal);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText("");
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
    dispatch(reset());
    dispatch(getGoals());
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input id="text" type="text" value={text} onChange={onChange} />
        </div>
        <div className="form-group">
          <button className="btn">add goal</button>
          <button type="button" className="btn" onClick={onClick}>
            get goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
