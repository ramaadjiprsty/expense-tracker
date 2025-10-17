// import React from 'react';

export const AddTransaction = () => {
  return (
    <>
      <h3 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 my-4">
        Tambah Transaksi Baru
      </h3>
      <form>
        <div className="mb-4">
          <label htmlFor="text" className="block font-medium mb-1">
            Deskripsi
          </label>
          <input
            type="text"
            id="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan deskripsi..."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block font-medium mb-1">
            Jumlah
            <br />
            (negatif - pengeluaran, positif - pemasukan)
          </label>
          <input
            type="number"
            id="amount"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan jumlah..."
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
          Tambah Transaksi
        </button>
      </form>
    </>
  );
};