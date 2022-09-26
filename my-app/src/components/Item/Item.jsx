import { Image, VStack,Text,Link } from "@chakra-ui/react";
import { ContainerDescription } from "../ItemListContainer/style";
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
          <a href="#">Ver Mas</a>
        </div>
    </Card>
  )
}

export {Item}