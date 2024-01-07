import express from 'express';
import { userLogin, userLogout, userRegister } from '../controllers/userController.js';


const router = express.Router()

router.route('/register').post(userRegister)
router.route('/login').post(userLogin)
router.route('/logout').get(userLogout)

// router.get('/logout', userLogout)


export default router;


