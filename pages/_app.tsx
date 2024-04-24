import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface MyAppProps {
  Component: FC<any>;
  pageProps: any;
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;


