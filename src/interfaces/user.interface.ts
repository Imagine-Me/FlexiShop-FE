
export type UserRole = 'user' | 'admin'

export interface IUserLoginModel {
  access_token: string
  user: {
    firstName: string
    lastName: string
    fullName: string
    email: string
    role: UserRole
  }
}

export interface IUserLoginCredentials {
  email: string
  password: string
}
