import './app-header.scss'
import square from '../../resources/square.png';

const Header = () => {
    return (
        <header className="header ">
            <img src={square} alt="bx" className="header__img"/>
            <div className="header__user">
                <div className="header__user__rounded">Ч</div>
                <div className="header__user__text">
                    <div className="header__user__text__name">Черкашина Марина Сергеевна</div>
                    <div className="header__user__text__job">Секретарь</div>
                </div>
            </div>
        </header>
    )
}

export default Header;