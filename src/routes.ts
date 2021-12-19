import { Router } from 'express'

import authMid from './app/middlewares/authMid'

import AuthController from './app/controllers/AuthController'
import UserController from './app/controllers/UserController'

const router = Router()

router.post('/users', UserController.store)
router.post('/auth', AuthController.auth)
router.get('/users', authMid, UserController.index)

export default router

