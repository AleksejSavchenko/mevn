import { Router } from 'express'
import authController from '@controllers/auth.controller'

const authRouter = new Router()

authRouter.post('login', authController.login)
authRouter.post('login', authController.register)

export default authRouter
