
import { Link } from "react-router-dom";
import { Card } from "./style";



const Item = ({product}) => {
  return (
    <Card>
        <div className="image">
          <img src={product.image} alt="" />
        </div>
        <div className="contenido">
          <div className="title">
            <h2>{product.title}</h2>
          </div>
          <div className="description">
           <p>{product.description}</p>
          </div>
          <div className="priceVermas">
            <h3>{ '$' + product.price}</h3>
            <Link to={`/product/${product.id}`} className="Link">Ver Mas</Link>
          </div>
        </div>
    </Card>
  )
}

export {Item}