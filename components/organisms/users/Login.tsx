import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../../store/userSlice";
import { auth, onAuthStateChanged } from "../../../firebase";
import { Users } from "../../../interfaces/Users";
import LoginForm from "../../molecules/LoginForm";

const Login = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  //   const userAuth = props.users;

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return <>{!user ? <LoginForm /> : <div>Registration Form</div>}</>;
};

export default Login;
