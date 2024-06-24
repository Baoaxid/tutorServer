import { ParamsDictionary } from 'express-serve-static-core'
import { TokenType, UserVerifyStatus } from '~/constants/enums'

export interface RegisterRequestBody {
  name: string
  email: string
  password: string
  confirm_password: string
  date_of_birth: string
}

export interface loginReqBody {
  email: string
  password: string
}

export interface logoutReqBody {
  refresh_token: string
}

export interface resetPasswordReqBody {
  forgot_password_token: string
  password: string
  confirm_password: string
}

export interface UpdateMeReqBody {
  name?: string
  email?: string
  phone?: string
  school?: string
  date_of_birth?: string //vì ngta truyền lên string dạng ISO8601, k phải date
  grade?: string
  avatar?: string
}

export interface GetProfileReqParams {
  username: string
}

//ta làm luôn cho GetProfileReqParams
export interface GetProfileReqParams extends ParamsDictionary {
  username: string
}
export interface ChangePasswordReqBody {
  old_password: string
  password: string
  confirm_password: string
}
