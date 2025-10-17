// import React from "react";

export const IncomeExpenses = () => {
    return (
        <div className="bg-white shadow-lg p-5 my-5 flex justify-around rounded-md">
            <div className="text-center">
                <h4 className="text-lg uppercase font-semibold">Pemasukan</h4>
                <p className="text-2xl font-bold text-green-600">+Rp. 0</p>
            </div>
            <div className="border-l-2 border-gray-300"></div> {/* Pemisah */}
            <div className="text-center">
                <h4 className="text-lg uppercase font-semibold">Pengeluaran</h4>
                <p className="text-2xl font-bold text-red-600">-Rp. 0</p>
            </div>
        </div>
    )
}