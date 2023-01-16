import "./SecondChat.scss"
import {Header} from "../Header/Header";
import {SecondChatFooter} from "./Footer/SecondChatFooter.jsx";
import {SecondChatModal} from "./Modal/SecondChatModal";

export const SecondChat = ({messages, setMessages, images, setImages}) => {
    return (
        <>
            <div className="first-chat">
                <Header name="Евгений" logo="evgeniy"/>
                <main className="main">
                    {messages.map((message, index) => {
                        if (message.chat === "firstChat") {
                            return (
                                <div key={index} className="second-chat__message">
                                    <p className="second-chat__message-content">{message.message}</p>
                                    <p className="second-chat__message-date">{message.time}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index} className="first-chat__message">
                                    <p className="first-chat__message-content">{message.message}</p>
                                    <p className="first-chat__message-date">{message.time}</p>
                                </div>
                            )
                        }
                    })}
                    {images.map((image, index) => {
                        if (image.chatNumber === 1) {
                            return (
                                <div key={index} className="second-chat__image">
                                    <img className="second-chat__image-img" src={image.url} alt="not found img xD"/>
                                    {image.comment ?
                                        <p className="second-chat__image-comment">{image.comment}</p> : console.log('No comment')}
                                </div>
                            )
                        } else if (image.chatNumber === 2) {
                            return (
                                <div key={index} className="first-chat__image">
                                    <img className="first-chat__image-img" src={image.url} alt="not found img xD"/>
                                    {image.comment ?
                                        <p className="first-chat__image-comment">{image.comment}</p> : console.log('No comment')}
                                </div>
                            )
                        } else {
                            console.log('err')
                        }
                    })}
                </main>
                <SecondChatFooter messages={messages}
                                  setMessages={setMessages}/>
                <SecondChatModal images={images} setImages={setImages}/>
            </div>
        </>
    );
}
