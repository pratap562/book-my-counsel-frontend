// import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  console.log('in _app.jsx  ');
  return <Component {...pageProps} />
}
