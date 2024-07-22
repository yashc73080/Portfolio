import { AppProps } from 'next/app';
import '../styles/globals.css'; // Ensure you have this file for global styles

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
