import React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductList({ data }) {
    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map(({id, title, price, thumbnail, brand}) => {
            return <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              thumbnail={thumbnail}
              brand={brand} />
})}
    </div>
    )
}
