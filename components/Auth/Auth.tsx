"use client";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import styles from "./auth.module.scss";

const Auth = () => {
  const user = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);
  return (
    <div className={styles.iconAuth}>
      <SignedOut>
        <SignInButton>
          <div className={styles.contentAuth}>
            <CgProfile className={styles.iconProfile} />
            <p> Войти</p>
          </div>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <div className={styles.contentAuth}>
          <UserButton />
          {isAuthenticated && <p>{user.user?.firstName}</p>}
        </div>
      </SignedIn>
    </div>
  );
};

export default Auth;
