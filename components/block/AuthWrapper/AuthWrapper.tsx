import React from "react";

import styles from "./authwrapper.module.css";

import { Link } from "@app/components";

interface AuthWrapperProps {
  className?: string;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ className }) => {
  return (
    <div className={styles.lumi__sign_container}>
      <Link link={{ path: "#", label: "sign in" }} />
      <span>or</span>
      <Link link={{ path: "#", label: "register" }} />
    </div>
  );
};

export default AuthWrapper;
