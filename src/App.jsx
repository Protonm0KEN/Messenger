import './App.scss';
import {FirstChat} from "./components/Chats/FirstChat/FirstChat";
import {SecondChat} from "./components/Chats/SecondChat/SecondChat";
import {useState, useEffect} from "react";

function App() {
    const getMessages = () => {
        const messages = localStorage.getItem("messages");
        if (messages) {
            return JSON.parse(messages);
        } else {
            return [];
        }
    };
    getMessages();
    const getImages = () => {
        const images = localStorage.getItem("images");
        if (images) {
            return JSON.parse(images);
        } else {
            return [];
        }
    };
    getImages();
    const [messages, setMessages] = useState([getMessages()])
    const [images, setImages] = useState([getImages()])
    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(messages));
    }, [messages]);
    useEffect(() => {
        localStorage.setItem("images", JSON.stringify(images));
    }, [images]);
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
