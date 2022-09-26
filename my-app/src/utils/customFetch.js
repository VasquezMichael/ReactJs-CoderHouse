export const getListProduct = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const listProduct = await res.json();
        return listProduct;
    } catch (error) {
        
    }
    
}
