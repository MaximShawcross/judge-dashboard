import './navigation-menu.scss'

const NavigationMenu = () => {
    

    return (
        <nav className="nav">
        <div className="nav__wrapper">
            <h1 className = "nav__wrapper__title">Дела</h1>
            <div className="nav__wrapper__links">
                <a href='#' className="nav__wrapper__links__item nav__wrapper__links__item_active">Дела</a>
                <div className="nav__wrapper__links__item">/</div>
                <a href='#' className="nav__wrapper__links__item">Создание</a>
            </div>
        </div>
    </nav>
    )
}

export default NavigationMenu;