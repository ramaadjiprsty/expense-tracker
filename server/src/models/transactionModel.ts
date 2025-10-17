import mongoose, { Document, Schema } from 'mongoose';

export interface ITransaction extends Document {
    text: string,
    amount: number,
    createdAt: Date,
}

const TransactionSchema: Schema = new Schema(
    {
        text: {
            type: String,
            trim: true,
            required: [true, 'Teks transaksi wajib diisi'],
        },
        amount: {
            type: Number,
            required: [true, 'Jumlah transaksi wajib diisi'],
        },
    }
)

export default mongoose.model<ITransaction>('Transaction', TransactionSchema);