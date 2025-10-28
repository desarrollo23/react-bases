import { useState } from "react";
import { ItemProps } from "./Model/Interfaces/ItemProps";

export const ItemCounter = ({ Products }: ItemProps) => {

    const [count, setCount] = useState(Products.Amount);

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
        <section
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10
            }}>
            <span
                style={{
                    width: 150
                }}>
                {Products.Name ?? 'UnNamed'}
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
