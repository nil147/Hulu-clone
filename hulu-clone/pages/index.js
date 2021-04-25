import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Login from "../components/Login";
import Nav from "../components/Nav";
import Results from "../components/Results";
import { auth } from "../firebase";
import { login, logout, selectUser } from "../redux/features/userSlice";
import requests from "../requests";

export default function Home(props) {
  console.log(props.results);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            image: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout);
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <Nav />

          <Results results={props.results} />
        </>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const req = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: req.results,
    },
  };
}
