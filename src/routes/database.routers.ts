import { Router } from 'express'
import { dataController } from '~/controllers/database.controllers'
const databaseRouter = Router()

databaseRouter.get('/getUsers', dataController)

export default databaseRouter
