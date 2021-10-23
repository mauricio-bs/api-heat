import { Request, Response } from 'express'
import { GetLast3MessagesServices } from '../services/GetLast3MessagesServices'

class GetLast3MessagesController {
  async handle(req: Request, res: Response) {
    const service = new GetLast3MessagesServices()

    const result = await service.execute()

    return res.json(result)
  }
}

export { GetLast3MessagesController }
