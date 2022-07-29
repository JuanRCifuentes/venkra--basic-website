import { useParams } from "react-router-dom";
import Select from "react-select";
import products from "../../data/products";
import "./singleProduct.css";

const SingleProduct = () => {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);

    const sizes = [
        { label: "XL - Disponibles: " + product.xl, value: "xl" },
        { label: "L - Disponibles: " + product.l, value: "l" },
        { label: "M - Disponibles: " + product.m, value: "m" },
        { label: "S - Disponibles: " + product.s, value: "s" },
    ];

    const buyLink =
        "https://wa.me/+573044644001?text=Hola%2C%20estoy%20interesado%20en%20" +
        product.name +
        " (" +
        product.id +
        ").";

    return (
        <section className="section__product">
            <div className="product__image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product__title">
                <h2>{product.name}</h2>
            </div>
            <div className="container product-props__container">
                <p>{product.description}</p>
                <h5>Tamaño</h5>
                <div className="select__container">
                    <Select isSearchable={false} options={sizes} />
                </div>
                <h5>Colores:</h5>
                <p>{product.colores_temp}</p>
                <div className="container price-buy">
                    <div>
                        <h3>${product.price.toLocaleString()}</h3>
                    </div>
                    <a
                        href={buyLink}
                        target="_blank"
                        rel="noreferrer"
                        className="product__buy-link"
                    >
                        Compra ahora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;
