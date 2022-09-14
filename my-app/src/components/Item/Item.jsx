import { Image, VStack,Text,Link } from "@chakra-ui/react";
import { Card } from "./style";
const Item = ({product}) => {
  return (
    <Card>
        <h3>{product.name}</h3>
        <div className="image">
          <img src={product.image} alt="" />
        </div>
        <div className="contenido">
          <p>{product.description}</p>
          <a href="#">Ver Mas</a>
        </div>
    </Card>
  )
}

export {Item}