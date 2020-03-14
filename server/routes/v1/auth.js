import { Router } from 'express'
import loginValidator from '@validators/login'
import registerValidator from '@validators/register'
import authController from '@controllers/auth.controller'

const authRouter = new Router()

authRouter.post('/login', loginValidator, authController.login)
authRouter.post('/register', registerValidator, authController.register)

export default authRouter
