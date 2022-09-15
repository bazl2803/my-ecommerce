import Link from "next/link";
import React from "react";
import Button from "../../components/Button";
import TextBlock from "../../components/TextBlock";
import TextBox from "../../components/TextBox";

const SignUp = () => {
  return (
    <div className="SignUp">
      <TextBox
        name="email"
        label="Username or email:"
        placeholder="example@domain.com"
      />
      <TextBox
        name="password"
        label="Password:"
        placeholder="At least 8 characters"
        type="password"
      />
      <Button className="SignUp--email">Sing Up</Button>

      <TextBlock align="center">or</TextBlock>

      <div className="SignUp__options">
        <Button className="SignUp--google">Sign Up with Google</Button>
        <Button className="SignUp--facebook">Sign Up with Facebook</Button>
        <Button className="SignUp--apple">Sign Up with Apple</Button>
      </div>

      <Link href="#">
        <TextBlock className="SignUp__link">
          Have you already an account?
        </TextBlock>
      </Link>
    </div>
  );
};

export default SignUp;
