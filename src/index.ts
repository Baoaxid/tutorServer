import express from 'express'
import databaseService from './services/database.services'
import usersRouter from './routes/users.routers'
import databaseRouter from './routes/database.routers'
const app = express()
app.use(express.json())
const port = 5173

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/auth', usersRouter)

app.use('/data', databaseRouter)

app.listen(port, () => {
  console.log(`Project tutor này đang chạy trên post ${port}`)
})

databaseService.connect()
