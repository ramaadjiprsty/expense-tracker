import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useGlobalContext();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim() == '' || amount.trim() === '') {
      alert('Isi Deskripsi atau jumlah (bukan 0)');
      return;
    }

    const numericAmount = Number(amount)

    if (numericAmount === 0) {
      alert('Jumlah tidak boleh nol');
      return;
    }

    const newTransaction = {
      _id: Math.random().toString(), // id dummy sementara
      text,
      amount: +amount
    }

    addTransaction({ text, amount: +amount})

    setText('')
    setAmount('')
  }
  
  return (
    <>
      <h3 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 my-4">
        Tambah Transaksi Baru
      </h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="text" className="block font-medium mb-1">
            Deskripsi
          </label>
          <input
            type="text"
            id="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan deskripsi..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block font-medium mb-1">
            Jumlah
            <br />
            (negatif - pengeluaran, positif - pemasukan)
          </label>
          <input
            type="text"
            id="amount"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan jumlah..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
          Tambah Transaksi
        </button>
      </form>
    </>
  );
};