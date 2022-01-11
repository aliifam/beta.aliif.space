import '../styles/globals.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
