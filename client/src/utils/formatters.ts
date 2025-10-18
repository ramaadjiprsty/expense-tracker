export function formatToRupiah(amount: number): string {
    const value = Number(amount);
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(isNaN(value) ? 0 : value);
}