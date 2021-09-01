import Head from 'next/head'
import Navbar from '../components/Molecules/Navbar'
import Header from '../components/Molecules/Header'
import Results from '../components/Molecules/Results'
import requests from '../utility/requests'

export default function Home ({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Remastered</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  )
}

export async function getServerSideProps (context) {
  const genre = context.query.genre
  const request = await fetch(`https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`
  ).then(res => res.json())
  return {
    props: {
      results: request.results
    }
  }
}
