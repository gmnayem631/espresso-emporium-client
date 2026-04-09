import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="card bg-base-100 max-w-sm mx-auto mt-20 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <p className="link link-hover">
              Already have an account? <Link to={"/signIn"}>Sign In</Link>
            </p>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
