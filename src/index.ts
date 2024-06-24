import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './routes/users.routers'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'

const app = express()
const port = 3000

const corsOptions = {
  origin: '*',
  credentials: true, // access-control-allow-credentials:true
  allowedHeaders: ['Content-Type', 'application/json'], // access-control-allow-headers
  optionSuccessStatus: 200
}
app.all('*', (req, res, next) => {
  // console.log(req)
  console.log('time', Date.now()), next()
})

app.use(cors(corsOptions))
app.use(express.json()) //app handler
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use('/users', usersRouter) //route handler
databaseService.connect()

//trở thành error handler cho cả app
//các route trên bị lỗi sẽ next(err) và xuống đây
app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Project twitter này đang chạy trên post ${port}`)
})
