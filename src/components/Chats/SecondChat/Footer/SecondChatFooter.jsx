import "./Footer.scss"
import sendMsg from "../../../../assets/icons/mail.svg";
import sendImg from "../../../../assets/icons/Camera.svg";
import {useState} from "react";

export const SecondChatFooter = ({setMessages, messages}) => {
    const [value, setValue] = useState('');
    const onChangeValue = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    const sendMessage = (e) => {
        if (value) {
            e.preventDefault();
            const newMessage = {
                chat: "secondChat",
                id: Math.random().toString(36).substring(2, 9),
                message: value,
                time: `${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`
            }
            setMessages([...messages, newMessage]);
            setValue('');
        } else {
            console.log('gg')
        }
    }
    const openModal = () => {
        const Modal = document.querySelector('.second-modal')
        Modal.classList.add('active')
        console.log(Modal)
    }
    return (
        <>
            <footer className="footer">
                <form onSubmit={sendMessage} action="" className="footer__form">
                    <input onChange={onChangeValue} value={value} type="text" className="footer__form-input"
                           placeholder="Написать сообщение..."/>
                </form>
                <div className="footer__buttons">
                    <button onClick={sendMessage} className="send-msg__button"><img src={sendMsg} alt=""/></button>
                    <button onClick={openModal} className="send-img__button"><img src={sendImg} alt=""/></button>
                </div>
            </footer>
        </>
    );
}
