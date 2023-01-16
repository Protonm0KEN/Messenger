import {useState} from "react";

export const SecondChatModal = ({images, setImages}) => {
    const [url, setUrl] = useState("")
    const [comment, setComment] = useState("")
    const onChangeUrl = (e) => {
        setUrl(e.target.value)
    }
    const onChangeComment = (e) => {
        setComment(e.target.value)
    }
    const closeModal = () => {
        const SecondModal = document.querySelector('.second-modal')
        SecondModal.classList.remove('active')
        console.log('second modal closed')
    }
    const sendImage = (e) => {
        e.preventDefault()
        const newImage = {
            chatNumber: 2,
            url: url,
            comment: comment,
            id: Math.random().toString(36).substring(2, 9),
        }
        setImages([...images, newImage]);
        setUrl('')
        setComment('')
        closeModal()
    }
    return (
        <div className="modal second-modal">
            <div className="modal__wrapper">
                <h2 className="modal__title">Отправить картинку</h2>
                <form onSubmit={sendImage} action="input" className="modal__form">
                    <div className="modal__group">
                        <input className="send-img" type="text" onChange={onChangeUrl} required value={url}/>
                        <span></span>
                        <label>Title</label>
                    </div>
                    <div className="modal__group">
                        <input className="send-comment" type="text" required value={comment}
                               onChange={onChangeComment}/>
                        <span></span>
                        <label>Content</label>
                    </div>
                    <div className="modal__btns">
                        <button onClick>Отмена</button>
                        <button onClick={sendImage}>Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
