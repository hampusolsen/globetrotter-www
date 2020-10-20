import React from "react";

const Login: React.FC = () => {
  return (
    <>
      <h2>sign in with email</h2>
      <form id="login-form">form</form>
      <div>
        <span>OR</span>
        <hr />
      </div>
      <section>
        <button type="button">google</button>
        <button type="button">facebook</button>
      </section>
    </>
  );
};

export default Login;
