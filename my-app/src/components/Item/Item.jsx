import { ContainerDescription } from "../ItemListContainer/style";
import {NavLink, Link} from "react-router-dom";
import { Card } from "./style";


const Item = ({product}) => {
  return (
    <Card>
        <h2>{product.title}</h2>
        <div className="image">
          <img src={product.image} alt="" />
        </div>
        <div className="contenido">
          <div className="description">
           <p>{product.description}</p>
          </div>
          <h3>{product.price}</h3>
          <Link to={`/product/${product.id}`} className="Link">Ver Mas</Link>
        </div>
    </Card>
  )
}

export {Item}