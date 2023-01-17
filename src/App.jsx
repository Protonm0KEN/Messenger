import './App.scss';
import {FirstChat} from "./components/Chats/FirstChat/FirstChat";
import {SecondChat} from "./components/Chats/SecondChat/SecondChat";
import {useState, useEffect} from "react";

function App() {
    const [messages, setMessages] = useState([])
    const [images, setImages] = useState([])
    return (
        <div className="App">
            <FirstChat
                messages={messages}
                setMessages={setMessages}
                images={images}
                setImages={setImages}
            />
            <SecondChat
                messages={messages}
                setMessages={setMessages}
                images={images}
                setImages={setImages}
            />
        </div>
    );
}

export default App;
