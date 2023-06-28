import React from "react";

import styles from "./authwrapper.module.css";

import { Link } from "@app/components";

interface AuthWrapperProps {
  className?: string; // Optional CSS class for the AuthWrapper component
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ className }) => {
  return (
    <div className={styles.lumi__sign_container}>
      <Link link={{ path: "#", label: "sign in" }} />{" "}
      {/* Render a Link component for signing in */}
      <span>or</span>
      <Link link={{ path: "#", label: "register" }} />{" "}
      {/* Render a Link component for registering */}
    </div>
  );
};

export default AuthWrapper;
