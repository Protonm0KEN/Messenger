import "./Header.scss"
import alexandr from "../../../assets/icons/Alexandr.png"
import evgeniy from "../../../assets/icons/Evgeniy.png"
export const Header = ({name, logo}) => {
    return (
        <>
            <header className="header">
                <div className="header__user">
                        <img src = {logo === "alexandr" ? alexandr : evgeniy} className="user__logo" alt = ""/>
                        <div className="user__info">
                            <p className="user__name">{name}</p>
                            <p className="user__state">Онлайн</p>
                        </div>
                </div>
            </header>
        </>
    );
}
