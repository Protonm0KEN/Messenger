import "./FirstChatModal.scss"
import {useState} from "react";

export const FirstChatModal = ({images, setImages}) => {
    const [url, setUrl] = useState("")
    const [comment, setComment] = useState("")
    const onChangeUrl = (e) => {
        setUrl(e.target.value)
    }
    const onChangeComment = (e) => {
        setComment(e.target.value)
    }
    const sendImage = (e) => {
        e.preventDefault()
        const newImage = {
            chatNumber: 1,
            url: url,
            comment: comment,
            id: Math.random().toString(36).substring(2, 9),
        }
        setImages([...images, newImage]);
        setUrl('')
        setComment('')
        console.log(newImage)
        closeModal()
    }
    const closeModal = () => {
        const modal = document.querySelector('.modal')
        modal.classList.remove('active')
    }
    return (
        <div className="modal">
            <div className="modal__wrapper">
                <h2 className="modal__title">Отправить картинку</h2>
                <form onSubmit={sendImage} action="input" className="modal__form">
                    <div className="modal__group">
                        <input value={url} className="send-img" type="text" onChange={onChangeUrl} required/>
                        <span></span>
                        <label>Url</label>
                    </div>
                    <div className="modal__group">
                        <input className="send-comment" type="text" required value={comment}
                               onChange={onChangeComment}/>
                        <span></span>
                        <label>Comment</label>
                    </div>
                    <div className="modal__btns">
                        <button onClick={closeModal}>Отмена</button>
                        <button onClick={sendImage}>Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
