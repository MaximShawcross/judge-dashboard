import { showModal } from '../../utils/modal';
import './table-header.scss'

const TableHeader = ({setModalStyle}) => {
    return (

        <div className="table__wrapper__header">
            <div className="table__wrapper__header__item">
                <div className="table__wrapper__header__item__text">Поиск по делам :</div>
                <input className = "table__wrapper__header__item__input" type="text" required/>
            </div>
            <button onClick={() => showModal(setModalStyle)} className = "table__wrapper__header__button">Создать дело</button>
        </div>
        
    )
}

export default TableHeader;