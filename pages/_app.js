import Sidebar from "../src/components/common/Sidebar";
import "../styles/globals.css";

function Home({ Component, pageProps }) {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default Home;
