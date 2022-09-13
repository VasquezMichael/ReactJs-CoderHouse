import { Image, VStack,Text } from "@chakra-ui/react";

const Item = ({product}) => {
    console.log(product);
  return (
    <VStack>
        <Text>{product.name}</Text>
    </VStack>
  )
}

export {Item}