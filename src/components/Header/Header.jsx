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

const Header = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      console.log(user.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      console.log(user.user.email);
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
        <NavigationMenu />
        <AuthButtons openModal={openModal} logout={logout} />
        {user ? user.email : "Not Logged In"}
      </StyledHeader>

      {modalType === "register" && (
        <Modal onClose={closeModal}>
          <h2>Register</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              register();
            }}
          >
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            <button type="submit" onClick={register}>
              Register
            </button>
          </form>
        </Modal>
      )}

      {modalType === "login" && (
        <Modal onClose={closeModal}>
          <h2>Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <button type="submit" onClick={login}>
              Login
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Header;
