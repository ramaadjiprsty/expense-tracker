import { useGlobalContext } from "../context/GlobalState"
import { formatToRupiah } from "../utils/formatters"

export const Balance = () => {
    const { transactions } = useGlobalContext();

    const amounts = transactions.map((transaction) => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <>
        <h4 className="text-lg font-semibold uppercase">Saldo Anda</h4>
        <h1 className="text-4xl font-bold tracking-wide">{formatToRupiah(total)}</h1>
        </>
    )
}