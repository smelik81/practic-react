const LoginForm = ({ onLogin }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { login, password } = form.elements; // Деструктуризуємо елементи форми
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="login" placeholder="Enter name" />
      </label>
      <label>
        Password:
        <input type="password" name="password" placeholder="enter password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
