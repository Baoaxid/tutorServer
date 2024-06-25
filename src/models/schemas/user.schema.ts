import { now } from 'lodash'

interface UserType {
  _id?: number
  fullname: string
  username: string
  email: string
  password: string
  avatar?: string // optional
  date_of_birth: Date
  role: string

  phone?: string // optional
  address: string // optional
}

export default class User {
  _id?: number
  fullname: string
  username: string
  email: string
  password: string
  avatar?: string // optional
  date_of_birth: Date
  role: string

  phone?: string // optional
  address: string // optional
  constructor(user: UserType) {
    const date = new Date() //tạo này cho ngày created_at updated_at bằng nhau
    this._id = user._id // tự tạo id
    this.fullname = user.fullname || '' // nếu người dùng tạo mà k truyền ta sẽ để rỗng
    this.username = user.username || ''
    this.email = user.email
    this.password = user.password
    this.avatar = user.avatar || ''
    this.date_of_birth = user.date_of_birth || new Date(now())
    this.role = user.role || 'Student'

    this.phone = user.phone || ''
    this.address = user.address || ''
  }
}
