import Product from "../../components/product"

const productList = [{
    id: 1,
    name: "Product 1",
    description: "Description 1",
    price: 100,
}]

export default function Products(){
    return (productList.map((product) => (
        <Product key={product.id} name={product.name} description={product.description} price={product.price} />
    )))
}