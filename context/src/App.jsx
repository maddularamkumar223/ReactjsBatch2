import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
import MessageProvider from "./context/messageContext";

const App = () => {
  return (
    <div>
      {/* <MessageProvider>
        <Parent1 name="Ram" />
        <Parent2 name="Ram" />
      </MessageProvider> */}
      <Parent1 name="Ram" />
      <Parent2 name="Ram" />
    </div>
  );
};

export default App;
