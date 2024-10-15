import { useDispatch } from "react-redux";
import css from "./User.module.css";
import { deleteUsers } from "../../redux/getTasksOps.js";

export const User = ({ name, phone, email, website, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h2>
          <b>{name}</b>
        </h2>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{website}</p>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(deleteUsers(id))}>
          Delete
        </button>
      </div>
    </div>
  );
};
