import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faFacebookF,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
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

      <TextBlock className="text-center">or</TextBlock>

      <div className="SignIn__options flex">
        <Button className="SignIn--google">
          <>
            <FontAwesomeIcon icon={faGoogle} />
          </>
        </Button>
        <Button className="SignIn--facebook">
          <>
            <FontAwesomeIcon icon={faFacebookF} />
          </>
        </Button>
        <Button className="SignIn--apple">
          <>
            <FontAwesomeIcon icon={faApple} />
          </>
        </Button>
      </div>

      <Link href="#">
        <TextBlock className="SignIn__link">Don't have account?</TextBlock>
      </Link>
    </div>
  );
};

export default SignIn;
