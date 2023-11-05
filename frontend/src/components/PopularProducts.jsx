import { Pagination } from 'antd';
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const popularProducts = [
	{
		id: '3432',
		product_name: 'Macbook M1 Pro 14"',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'Samsung Galaxy Buds 2',
		product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'Asus Zenbook Pro',
		product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
		product_price: '$899.00',
		product_stock: 56
	},
	{
		id: '9234',
		product_name: 'LG Flex Canvas',
		product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
		product_price: '$499.00',
		product_stock: 98
	},
	{
		id: '4314',
		product_name: 'Apple Magic Touchpad',
		product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
		product_price: '$699.00',
		product_stock: 0
	},
	{
		id: '4342',
		product_name: 'Nothing Earbuds One',
		product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
		product_price: '$399.00',
		product_stock: 453
	}
]

function PopularProducts({products}) {
	const inittial = () => ({
		data: products?.data,
		currentPage: 1,
		todosPerPage: 3
	  });
	const [limitProduct, setLimitProduct] = useState(inittial())

// const { data, currentPage, todosPerPage } = limitProduct;
    // Logic for displaying todos
    const indexOfLastTodo = limitProduct?.currentPage * limitProduct?.todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - limitProduct?.todosPerPage;

    const currentTodos = limitProduct?.data?.data?.slice(indexOfFirstTodo, indexOfLastTodo);
	const handleLimitProduct = (value) => {
		setLimitProduct({
			currentPage: Number(value)
		})
	}

	useEffect(() => {
		setLimitProduct({
			...limitProduct,
			data: products?.data,
		})
	},[products?.data])

	return (
		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Popular Products</strong>
			<div className="mt-4 flex flex-col gap-3">
				{currentTodos?.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-lg"
								src={product?.image}
								alt={product?.name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product?.name}</p>
							<span
								className={classNames(
									product?.countInStock === 0
										? 'text-red-500'
										: product?.countInStock > 50
										? 'text-green-500'
										: 'text-orange-500',
									'text-xs font-medium'
								)}
							>
								{product?.countInStock === 0 ? 'Out of Stock' : product?.countInStock + ' in Stock'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{product?.price}</div>
					</Link>
				))}
				<Pagination defaultCurrent={1} onChange={handleLimitProduct} total={products?.data?.length} />;
			</div>
		</div>
	)
}

export default PopularProducts
