export type Product = {
    title: string;
    description: string;
    price: number;
}

export const addProduct = async (product: Product) => {
    const apiRes = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(product),
    })

    if(!apiRes.ok){
        throw new Error('Failed to add product')
    }

    return apiRes.json()
}