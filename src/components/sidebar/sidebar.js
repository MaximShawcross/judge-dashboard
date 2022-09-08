import './sidebar.scss'
import calendar from "../../resources/bx-calendar.png" 
const Sidebar = () => {
    return (
        <aside className = "sidebar">
            <h2 className="sidebar__content">
                <div className="sidebar__content__header">меню секретаря суда</div>
                <div className="sidebar__content__item">
                    <img className = "sidebar__content__item__img" src= {calendar} alt="calendar"/>
                    <div className="sidebar__content__item__text">Список дел</div>
                </div>
            </h2>
        </aside>
    )
}

export default Sidebar;