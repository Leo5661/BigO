export const fetchProducts = async () => {
    const apiRes = await fetch('https://dummyjson.com/products');

    if(!apiRes.ok){
        throw new Error('Failed to fetch products');
    }

    return apiRes.json();
}