import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../requests'

export default function Home(props) {
  console.log(props.results);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Results results={props.results} />

    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;


  const req = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then((res) => res.json());


  return {
    props: {
      results: req.results,
    }
  }




}