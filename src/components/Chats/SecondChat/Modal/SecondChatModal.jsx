import {useState} from "react";

export const SecondChatModal = ({images, setImages}) => {
    const [url, setUrl] = useState("")
    const [comment, setComment] = useState("")
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
    const closeModal = () => {
        const SecondModal = document.querySelector('.second-modal')
        SecondModal.classList.remove('active')
        console.log('second modal closed')
    }
    return (
        <div className="modal second-modal">
            <div className="modal__wrapper">
                <h2 className="modal__title">Отправить картинку</h2>
                <form onSubmit={sendImage} action="input" className="modal__form">
                    <div className="modal__group">
                        <input className="send-img" type="text" onChange={(e) => {
                            e.preventDefault()
                            setUrl(e.target.value)}} required value={url}/>
                        <span></span>
                        <label>Title</label>
                    </div>
                    <div className="modal__group">
                        <input className="send-comment" type="text" required value={comment}
                               onChange={(e) => {
                                   e.preventDefault()
                                   setComment(e.target.value)
                               }}/>
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
