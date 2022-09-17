import Link from "next/link";
import React from "react";
import Button from "../../components/Button";
import TextBlock from "../../components/TextBlock";
import TextBox from "../../components/TextBox";

const SignIn = () => {
  return (
    <div className="SignIn">
      <TextBox
        type="email"
        name="email"
        label="Email:"
        placeholder="example@domain.com"
      />

      <TextBox
        type="password"
        name="password"
        label="Password:"
        placeholder="********"
        hint="At least 8 characters"
      />
      <Button className="SignIn--email">Sign In</Button>

      <TextBlock align="center">or</TextBlock>

      <div className="SignIn__options">
        <Button className="SignIn--google">Sign In with Google</Button>
        <Button className="SignIn--facebook">Sign In with Facebook</Button>
        <Button className="SignIn--apple">Sign In with Apple</Button>
      </div>

      <Link href="#">
        <TextBlock className="SignIn__link">
          Don't have account?
        </TextBlock>
      </Link>
    </div>
  );
};

export default SignIn;
