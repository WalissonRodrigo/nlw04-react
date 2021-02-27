import "../styles/global.css";
import { ChallengesProvider } from "../contexts/ChallengesContext";

function _app({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default _app;
