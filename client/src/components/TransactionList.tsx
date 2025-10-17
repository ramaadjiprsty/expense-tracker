export const TransactionList = () => {
  return (
    <>
      <h3 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 my-4">
        Riwayat Transaksi
      </h3>
      {/* Kita buat 'ul' (unordered list) */}
      <ul className="list-none p-0 mb-10">
        {/* Ini adalah 'li' (list item) dummy data */}
        <li className="bg-white shadow-md p-3 rounded-md flex justify-between items-center mb-3 relative border-r-8 border-red-600">
          <span>Makan Siang</span>
          <span>-Rp25.000</span>
          <button className="absolute -left-7 bg-red-600 text-white px-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity">
            X
          </button>
        </li>
        <li className="bg-white shadow-md p-3 rounded-md flex justify-between items-center mb-3 relative border-r-8 border-green-600">
          <span>Gaji</span>
          <span>+Rp5.000.000</span>
          <button className="absolute -left-7 bg-red-600 text-white px-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity">
            X
          </button>
        </li>
      </ul>
    </>
  );
};