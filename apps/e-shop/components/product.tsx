
interface ProductProps {
    id?: number,
    name: string,
    description: string,
    price: number,
}

export default function Product({id, name, description, price}: ProductProps) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}