import Head from 'next/head';
import Avatar from '../components/Avatar';
import {
  ViewGridIcon,
  MicrophoneIcon,
  SearchIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import propic from '../utilities/img.jpg';
import vsearchgiff from '../utilities/output-onlinegiftools.gif';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Search Engine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left div*/}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right div */}
        <div className="flex space-x-4 items-center">
          <p className="link">Mail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-5 w-5 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 hover:bg-gray-200 " />
          {/* Avatar */}
          <p> </p>
          <Avatar url={propic} />
        </div>
      </header>

      {/*Body*/}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src={vsearchgiff} height={200} width={500} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Search
          </button>
          <button onClick={() => router.push('/')} className="btn">
            Reset
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
