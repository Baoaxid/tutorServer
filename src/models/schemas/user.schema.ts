import { now } from 'lodash'

interface UserType {
  _id?: number
  fullname: string
  username: string
  email: string
  password: string
  avatar?: string // optional
  date_of_birth: Date
  role: number

  phone?: string // optional
  grade: string
  school: string // optional
}

export default class User {
  _id?: number
  fullname: string
  username: string
  email: string
  password: string
  avatar?: string // optional
  date_of_birth: Date
  role: number

  phone?: string // optional
  grade: string
  school: string // optional
  constructor(user: UserType) {
    const date = new Date() //tạo này cho ngày created_at updated_at bằng nhau
    this._id = user._id // tự tạo id
    this.fullname = user.fullname || '' // nếu người dùng tạo mà k truyền ta sẽ để rỗng
    this.username = user.username || ''
    this.email = user.email
    this.password = user.password
    this.avatar = user.avatar || ''
    this.date_of_birth = user.date_of_birth || new Date(now())
    this.role = user.role || 2

    this.phone = user.phone || ''
    this.grade = user.grade || ''
    this.school = user.school || ''
  }
}
