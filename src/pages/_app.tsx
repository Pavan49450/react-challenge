import "../../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store from "../store/index";

interface MyAppProps extends AppProps {
  // Define the type for pageProps explicitly
  pageProps: {
    // Your pageProps type definition here
    // For example, if pageProps is an object with a property 'data' of type 'string':
    data: string;
  };
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
