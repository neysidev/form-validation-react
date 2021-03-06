import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Image from '../../images/not-found.svg';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found!</title>
      </Helmet>
      <main className="py-10 mx-auto text-center w-96">
        <img src={Image} alt="Not Found" />
        <Link
          to="/"
          className="inline-block px-8 py-3 mt-5 text-lg text-white transition duration-100 ease-linear bg-indigo-500 rounded-full select-none hover:bg-indigo-600 focus:outline-none"
        >
          Go Back
        </Link>
      </main>
    </>
  );
}
