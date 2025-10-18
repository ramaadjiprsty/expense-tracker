// import React from "react";
import { useGlobalContext } from "../context/GlobalState"
import { formatToRupiah } from "../utils/formatters"

export const IncomeExpenses = () => {
    const { transaction } = useGlobalContext();

    const amounts = transaction.map((transaction) => transaction.amount)

    const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

    const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);


    return (
        <div className="bg-white shadow-lg p-5 my-5 flex justify-around rounded-md">
            <div className="text-center">
                <h4 className="text-lg uppercase font-semibold">Pemasukan</h4>
                <p className="text-2xl font-bold text-green-600">{formatToRupiah(income)}</p>
            </div>
            <div className="border-l-2 border-gray-300"></div>
            <div className="text-center">
                <h4 className="text-lg uppercase font-semibold">Pengeluaran</h4>
                <p className="text-2xl font-bold text-red-600">{formatToRupiah(expense * -1)}</p>
            </div>
        </div>
    )
}