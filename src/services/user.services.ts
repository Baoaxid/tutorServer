import databaseService from './database.services'

class UsersService {
  async checkEmailExist(email: string) {
    //vào database tìm xem có hông
    const users = await databaseService.getUsers()
    const user = users.find((u) => u.email === email)
    return Boolean(user) //có true, k false
  }
}

const usersService = new UsersService()
export default usersService
