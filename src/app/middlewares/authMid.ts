import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface TokenPayload{
    id: string
    iat: number
    exp: number
}

export default function authMiddleware( req: Request, res: Response, next: NextFunction){
    const { authorization } = req.headers
   
    if(!authorization){
        res.sendStatus(401)
    }
    /* usei as string pq o tipo de "authorization" é undefined */ 
    const token = authorization?.replace('Bearer', '').trim() as string

    try{
        const data = jwt.verify(token, 'secret')
        /*console.log(data)*/

        const { id } = data as TokenPayload

        req.userId = id

        return next()
    }catch{
        res.sendStatus(401)
    }
}
