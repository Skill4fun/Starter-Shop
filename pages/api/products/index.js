import { createRouter } from 'next-connect';
import dbConnect from '@/backend/config/dbConnect';
import { getProducts, newProduct } from '@/backend/controllers/productControllers';

const router = createRouter();

dbConnect();

router.get(getProducts);
router.post(newProduct);


export default router.handler();