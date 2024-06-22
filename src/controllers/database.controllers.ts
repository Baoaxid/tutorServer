import databaseService from '~/services/database.services'
import { Request, Response } from 'express'
import { log } from 'console'

export const dataController = async (req: Request, res: Response) => {
  try {
    const users = await databaseService.getUsers()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to retrieve users'
    })
  }
}
