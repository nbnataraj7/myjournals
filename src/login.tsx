import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const handleFormSubmit = (ev: SubmitEvent) => {
    ev.preventDefault();
    navigate('/home')
  };

  return (
    <>
      <h2>Sign In</h2>
      <p>enter your credentials...</p>
      <form onSubmit={handleFormSubmit} className={'login-form'}>
        <label>
          <span>Username </span>
          <input type={"text"} value={""}></input>
        </label>
        <label>
          <span>Password </span>
          <input type={"password"} value={""} class={'input'}></input>
        </label>
        <button class={"btn btn-solid"}>Show me my books</button>
      </form>
    </>
  );
};
