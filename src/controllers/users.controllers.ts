import { log } from 'console'
import { NextFunction, Request, Response } from 'express'
import databaseService from '~/services/database.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterRequestBody } from '~/models/request/user.request'

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const users = await databaseService.getUsers()
  const loggedUser = users.find((u) => u.email === email && u.passwordHash === password)
  if (loggedUser) {
    return res.json({
      message: 'login success',
      data: loggedUser
      // user: {
      //   id: loggedUser.UserID,
      //   email: loggedUser.email,
      //   role: 'SA',
      //   avatar: loggedUser.avatar,
      //   username: 'test username',
      //   name: loggedUser.fullName,
      //   phone: loggedUser.phone,
      //   school: 'test school',
      //   dob: loggedUser.dateOfBirth,
      //   grade: '12'
      // }
    })
  } else {
    return res.status(400).json({
      error: 'login failed'
    })
  }
}

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterRequestBody>,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body
  try {
    // throw new Error('tạo thử 1 cái lỗi nè')
    const result = await databaseService.insertUser(email, password)
    return res.status(200).json({
      message: 'Register success', //chỉnh lại thông báo
      result: result
    })
  } catch (err) {
    next(err)
  }
}
