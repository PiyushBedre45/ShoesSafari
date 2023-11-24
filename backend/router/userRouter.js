import express from 'express';
import { userLogin, userRegister } from '../controllers/userController.js';

const router = express.Router()

router.route('/register').post(userRegister)
router.route('/login').get(userLogin)
// router.get('/logout', userLogout)


export default router;

