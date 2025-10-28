import { ItemCounter } from './shopping-cart/ItemCounter'
import { Product } from './shopping-cart/Model/Interfaces/Products';

const products: Product[] = [
    { Name: 'Nintendo Switch', Amount: 1 },
    { Name: 'Xbox One', Amount: 3 },
    { Name: 'Pro Controller', Amount: 6 },
    { Name: 'PS Portal', Amount: 2 },
];

function FirstStepApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {products.map((product: Product) => (
                <ItemCounter
                    key={product.Name}
                    Products={product}
                />
            ))}
        </>
    );
}

export default FirstStepApp