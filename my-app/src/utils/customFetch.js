
export const customFetch = (products) => {
    return new Promise((resolve,rejec)=>{
        setTimeout(()=>{
            resolve(products);
        },2000)
    })

}