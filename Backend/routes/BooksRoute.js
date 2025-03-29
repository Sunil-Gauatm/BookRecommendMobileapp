import express from "express"
import {getBook} from '../controller/bookController.js'
import {displayBook} from '../controller/bookController.js'
import {protectRoute} from '../middlewares/authvalidation.js'


const router = express.Router()

router.post('/' ,protectRoute , getBook)
router.get('/' ,protectRoute , displayBook)

export default router