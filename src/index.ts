import express, { NextFunction, Request, Response } from 'express'

import usersRouter from './routes/users.routers'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'

const app = express()
const port = 3000
app.use(express.json()) //app handler
app.use('/users', usersRouter) //route handler
databaseService.connect()
app.get('/', (req, res) => {
  res.send('hello world')
})
//trở thành error handler cho cả app
//các route trên bị lỗi sẽ next(err) và xuống đây
app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Project twitter này đang chạy trên post ${port}`)
})
