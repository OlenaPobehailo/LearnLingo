import { useEffect, useState } from "react";
import { StyledHeader } from "./Header.styled";
import Modal from "../Modal/Modal";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../firebase-config";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import AuthButtons from "../AuthButtons/AuthButtons";
import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";

const Header = () => {
  const [modalType, setModalType] = useState(null);
  const [user, setUser] = useState({});

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async (formData) => {
    try {
      const { email, password } = formData;

      await createUserWithEmailAndPassword(auth, email, password);
      // console.log(user);
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

  return (
    <>
      <StyledHeader>
        <Logo />
        <NavigationMenu />
        <AuthButtons openModal={openModal} logout={logout} />
        {user ? user.email : "Not Logged In"}
      </StyledHeader>

      {modalType === "register" && (
        <Modal onClose={closeModal}>
          <AuthForm
            title="Register"
            fields={[
              { name: "name", type: "text", placeholder: "Name" },
              { name: "email", type: "email", placeholder: "Email" },
              { name: "password", type: "password", placeholder: "Password" },
            ]}
            onSubmit={register}
          />
        </Modal>
      )}

      {modalType === "login" && (
        <Modal onClose={closeModal}>
          <AuthForm
            title="Login"
            fields={[
              { name: "email", type: "email", placeholder: "Email" },
              { name: "password", type: "password", placeholder: "Password" },
            ]}
            onSubmit={login}
          />
        </Modal>
      )}
    </>
  );
};

export default Header;
