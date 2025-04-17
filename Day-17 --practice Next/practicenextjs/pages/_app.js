import "../styles/globals.css";
import Navbar from "./component/nav";
export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />;</>
}
