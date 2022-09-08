import TableItem from '../table-item/table-item';
import './table.scss'
import pencil from "../../resources/pencil.png";
import arrows from "../../resources/arrow.png";

const Table = () => {
    return (
        
        <table class="table-content">
            <thead>
                <tr class = "table-content__header">
                    <th class = "table-content__header__item">
                        <div class="table-content__header__item__text">УИД</div> 
                        <img src= {arrows} alt="arrow"/>
                    </th>
                    <th class = "table-content__header__item">
                        <div class="table-content__header__item__text">№ дела</div>
                        <img src= {arrows} alt="arrow"/>
                    </th>
                    <th class = "table-content__header__item">
                        <div class="table-content__header__item__text">Истец</div>
                        <img src= {arrows} alt="arrow"/>
                    </th>
                    <th class = "table-content__header__item">
                        <div class="table-content__header__item__text">Ответчик</div>
                        <img src= {arrows} alt="arrow"/>
                    </th>
                    <th class = "table-content__header__item">
                        <div class="table-content__header__item__text">Начато</div>
                        <img src= {arrows} alt="arrow"/>
                    </th>
                    <th class = "table-content__header__item">
                        <div class="table-content__header__item__text">Окончено</div>
                        <img src= {arrows} alt="arrow"/>
                    </th>
                    <th class = "table-content__header__item">
                        
                    </th>
                    <th class = "table-content__header__item">
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <TableItem/>   
                <TableItem/>
                <TableItem/>   
                <TableItem/>
                <TableItem/>   
                <TableItem/>            
            </tbody>
        </table>

        
    )
}

export default Table;