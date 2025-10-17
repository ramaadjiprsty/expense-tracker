import express from 'express';
import {
    getTransactions,
    addTransaction,
    deleteTransaction,
} from '../controllers/transactionController'

const router = express.Router();

// route untuk GET dan POST
// Jika ada request GET ke '/', panggil getTransactions
// Jika ada request POST ke '/', panggil addTransaction
router.route('/').get(getTransactions).post(addTransaction)

// route untuk DELETE
// Jika ada request DELETE ke '/:id', panggil deleteTransaction
router.route('/:id').delete(deleteTransaction);

export default router;