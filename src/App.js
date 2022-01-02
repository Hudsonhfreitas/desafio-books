import GlobalStyle from "./styles/global";
import Router from "./routes";
import {AttProvider} from "./contexts/AttContext";

function App() {
  return (
    <div>
      <AttProvider>
        <Router />
        <GlobalStyle />
      </AttProvider>
    </div>
  );
}

export default App;
