import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from "next/font/local";

const Vazir = localFont({
  src: "../public/fonts/Vazir-Medium.ttf",
});

export default function App({ Component, pageProps }: AppProps) {

  return(
    <main className={Vazir.className}>
      <Component {...pageProps} />
    </main>
  );  
}
