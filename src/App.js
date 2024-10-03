import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const { default: Body } = require("./components/Body");

function App() {
  return (
    <Provider store={appStore}>
    <Body/>
    </Provider>
  );
}

export default App;
