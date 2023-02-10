import { Poppins } from "@next/font/google";
import "../styles/globals.css";
import "../styles/tailwind.css";
import { AppProvider } from "../src/utils/context";
import { Toaster } from "react-hot-toast";

const roboto = Poppins({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className={roboto.className}>
        <Toaster />
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}

export default MyApp;
