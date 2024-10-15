import { User } from "../User/User.jsx";

export const Users = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map(({ name, id, phone, email, website }) => (
          <li key={id}>
            <User
              name={name}
              email={email}
              phone={phone}
              website={website}
              id={id}
            />
          </li>
        ))}
      </ul>
      ;
    </div>
  );
};
