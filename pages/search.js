import Head from 'next/head';
import Header from '../components/Header';
import Response from '../Response';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';

function Search({ results }) {
  const router = useRouter();
  //console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - V-Search</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;
export async function getServerSideProps(context) {
  //console.log(process.env.API_KEY);
  // console.log(process.env.CONTEXT_KEY);
  const useDummyDate = false;
  const startIndex = context.query.start || '0';

  const data = useDummyDate
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());
  //after ssr passing result
  return {
    props: {
      results: data,
    },
  };
}
