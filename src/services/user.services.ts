import User from '~/models/schemas/user.schema'
import jwt from 'jsonwebtoken'
import databaseService from './database.services'
import { config } from 'dotenv'
config()

class UsersService {
  async checkEmailExist(email: string) {
    //vào database tìm xem có hông
    const users = await databaseService.getUsers()
    const user = users.find((u) => u.email === email)
    return Boolean(user) //có true, k false
  }

  generateAuthToken(user: User) {
    const jwtSecret = process.env.JWT_SECRET as string
    return jwt.sign({ id: user._id, email: user.email }, jwtSecret, { expiresIn: '1h' })
  }
}

const usersService = new UsersService()
export default usersService
