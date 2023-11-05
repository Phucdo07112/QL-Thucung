import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { convertPrice } from '../utils/jsonString'



export default function TransactionChart({totalPrice, totalExpenses}) {
	const data = [
		{
			name: 'Jan',
			Expense: totalExpenses,
			Income: totalPrice,
			Date: "01/11/2023"
		},
		{
			name: 'Feb',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Mar',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Apr',
			Expense: 0,
			Income: 0
		},
		{
			name: 'May',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Jun',
			Expense: 0,
			Income: 0
		},
		{
			name: 'July',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Aug',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Sep',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Oct',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Nov',
			Expense: 0,
			Income: 0
		},
		{
			name: 'Dec',
			Expense: 0,
			Income: 0
		}
	]
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Transactions</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart	
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Income" fill="#0ea5e9" />
						<Bar dataKey="Expense" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
