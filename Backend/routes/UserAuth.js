import express from "express"
import {signupValidation} from '../middlewares/authvalidation.js'
import {signup} from '../controller/authController.js'
import {login} from '../controller/authController.js'


const router = express.Router()

router.post('/signup' , signup)

router.post('/login' , login)

export default router;