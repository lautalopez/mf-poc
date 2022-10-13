import React, {useState, useEffect} from "react";

import {getProductById, currency} from "home/products";

export default function PDPContent() {
    const id = 1
    const [product, setProduct] = useState(null);

    useEffect(async () => {
        if (id) {
            try {
                setProduct(await getProductById(id));
            } catch (e) {
            }
        } else
            setProduct(null);
    }, [id]);

    if (!product) return null;
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <img src={product.image} alt={product.name}/>
            </div>
            <div>
                <div className="flex">
                    <div className="font-bold text-3xl flex-grow">
                        <a>{product.name}</a>
                    </div>
                    <div className="font-bold text-3xl flex-end">
                        {currency.format(product.price)}
                    </div>
                </div>
                <div className="mt-10">
                    {product.description}
                </div>
                <div className="mt-10">
                    {product.longDescription}
                </div>
            </div>
        </div>
    );
}