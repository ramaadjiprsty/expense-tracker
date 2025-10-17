import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Transaction from '../models/transactionModel';

// @desc    Fetch all transactions
// @route   GET /api/v1/transactions
// @access  Public
export const getTransactions = asyncHandler(async (req: Request, res: Response) => {
    // ambil semua data dari database
    const transaction = await Transaction.find();

    // response as JSON
    res.status(200).json({
        success: true,
        count: transaction.length,
        data: transaction,
    });
});

// @desc    tambah transaksi baru
// @route   GET /api/v1/transactions
// @access  Public
export const addTransaction = asyncHandler(async (req: Request, res: Response) => {
    // ambil text dan amount dari body req
    const { text, amount } = req.body;

    // buat transaksi baru di db menggunakan model
    const transaction = await Transaction.create(req.body);

    // respon sukses
    res.status(200).json({
        success: true,
        data: transaction,
    });
});

// @desc    hapus transaksi
// @route   GET /api/v1/transactions/:id
// @access  Public
export const deleteTransaction = asyncHandler(async (req: Request, res: Response) => {
    // cari id transaksi
    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
        res.status(404);
        throw new Error('Transaksi tidak ditemukan');
    };

    await transaction.deleteOne();

    res.status(200).json({
        success: true,
        data: {},
    });
});