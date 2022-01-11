import GlobalStyle from "./styles/global";
import Router from "./routes";
import {AttProvider} from "./contexts/AttContext";

function App() {
  return (
    <>
      <AttProvider>
        <Router />
        <GlobalStyle />
      </AttProvider>
    </>
  );
}

export default App;
