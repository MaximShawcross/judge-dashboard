import './table-item.scss'
import pencil from "../../resources/pencil.png";

const TableItem = () => {

    return (
        <tr class = "table-content__row">
            <td class = "table-content__body__item">31MS0041-01-2021-000604-52</td>
            <td class = "table-content__body__item">2-489/2021</td>
            <td class = "table-content__body__item">ООО «Вектор 555 Белгород» </td>
            <td class = "table-content__body__item">Черкашина Марина Евгеньевна</td>
            <td class = "table-content__body__item">25.11.2021</td>
            <td class = "table-content__body__item">26.11.2021</td>
            <td class = "table-content__body__item"><img class = "table-content__body__item__img" src={pencil} alt="pencil"/></td>
            <td class = "table-content__body__item"><button class = "table-content__body__item__button">Открыть дело</button></td>
        </tr>
    )
}

export default TableItem;