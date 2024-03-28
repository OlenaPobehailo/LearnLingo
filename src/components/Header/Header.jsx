import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { StyledHeader } from "./Header.styled";
import Modal from "../Modal/Modal";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  // onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../firebase-config";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import AuthButtons from "../AuthButtons/AuthButtons";
import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useAuthState } from "react-firebase-hooks/auth";

const registrationForm = {
  title: "Registration",
  text: "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information",
  fields: [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ],
  button: "Sign Up",
};

const loginForm = {
  title: "Log In",
  text: "Welcome back! Please enter your credentials to access your account and continue your search for a teacher.",
  fields: [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ],
  button: "Log In",
};

const Header = () => {
  const [modalType, setModalType] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  const [user] = useAuthState(auth);

  useEffect(() => {
    setAuthUser(user);
    setLoading(false);
  }, [user]);

  const register = async (formData) => {
    try {
      const { email, password, name } = formData;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      await updateProfile(user, { displayName: name });
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (formData) => {
    try {
      const { email, password } = formData;

      await signInWithEmailAndPassword(auth, email, password);
      // console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  if (loading) return null;

  return (
    <>
      <StyledHeader>
        <Logo />
        <NavigationMenu />
          <AuthButtons openModal={openModal} logout={logout} user={authUser} />
      </StyledHeader>

      {modalType === "register" && (
        <Modal onClose={closeModal}>
          <AuthForm
            title={registrationForm.title}
            text={registrationForm.text}
            fields={registrationForm.fields}
            button={registrationForm.button}
            onSubmit={register}
          />
        </Modal>
      )}

      {modalType === "login" && (
        <Modal onClose={closeModal}>
          <AuthForm
            title={loginForm.title}
            text={loginForm.text}
            fields={loginForm.fields}
            button={loginForm.button}
            onSubmit={login}
          />
        </Modal>
      )}
    </>
  );
};

export default Header;

Header.propTypes = {
  user: PropTypes.object,
};
