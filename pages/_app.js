import "@/styles/globals.css";
import AuthState from "@/context/auth/authState";
import AppState from "@/context/app/appState";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </AuthState>
  );
};

export default MyApp;

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
