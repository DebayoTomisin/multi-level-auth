import { Poppins } from "@next/font/google";
import "../styles/globals.css";
import { AppProvider } from "../src/utils/context";

const roboto = Poppins({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}

export default MyApp;
