import Image from "next/image";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { login } from "../redux/features/userSlice";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            email: result.user.email,
            uid: result.user.uid,
            displayName: result.user.displayName,
            image: result.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png?fit=960%2C510"
        height={300}
        width={300}
      />

      <div className="flex">
        <button onClick={signIn} className="bg-white text-black p-5 rounded-md">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
