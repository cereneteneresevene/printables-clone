import '../styles/globals.css';
import '../../dist/output.css'; 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
