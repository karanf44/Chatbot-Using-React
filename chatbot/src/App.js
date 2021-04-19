
import './App.css';
import Chatbot from "react-chatbot-kit" ;

import config from "./Chatbot/Config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";

function App() {
  return (
    <div className="App">
    <div className="App-header">
      <Chatbot
      config={config} 
      actionProvider={ActionProvider} 	   
      messageParser={MessageParser}
      />
      </div>
      </div>
  );
}

export default App;
