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
  date_of_birth?: string //vì ngta truyền lên string dạng ISO8601, k phải date
  bio?: string
  location?: string
  website?: string
  username?: string
  avatar?: string
  cover_photo?: string
}

export interface GetProfileReqParams {
  username: string
}

export interface FollowReqBody {
  followed_user_id: string
}

export interface UnfollowReqParams {
  user_id: string
}
//cho UnfollowReqParams kế thừa ParamsDictionary
export interface UnfollowReqParams extends ParamsDictionary {
  user_id: string
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
export interface RefreshTokenReqBody {
  refresh_token: string
}