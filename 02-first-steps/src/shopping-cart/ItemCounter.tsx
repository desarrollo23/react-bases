import { useState } from "react";
import { ItemProps } from "./Model/Interfaces/ItemProps";
// import './ItemCouter.css';
import myCss from './ItemCouter.module.css';

export const ItemCounter = ({ Product }: ItemProps) => {

    const [count, setCount] = useState(Product.Amount);

    const handleClickAdd = () => {
        setCount(count + 1);
    }

    const handleClickSubtract = () => {
        if (count == 0) {
            return;
        }

        setCount(count - 1);
    }

    return (
        <section className={myCss.itemCounter}>
            <span className={myCss.itemText}>
                {Product.Name ?? 'UnNamed'}
            </span>
            <button
                onClick={handleClickSubtract}>
                -1
            </button>
            <span>{count}</span>
            <button
                onClick={handleClickAdd}>
                +1
            </button>
        </section>
    )
}
