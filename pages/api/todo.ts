// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTodo, deleteTodo, getAllTodos } from 'lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const data   = req.body
  const method = req.method

  switch (method) {

    case 'GET':
      const response = await getAllTodos()
      res.status(200).json(response)
      break

    case 'POST':
      await createTodo(data)
      res.status(200).json({ message: 'Success!' })
      break

    case 'DELETE':
      await deleteTodo(JSON.parse(data))
      res.status(200).json({ message: 'Success!' })
      break

    default:
      res.setHeader('Allow', ['POST', 'DELETE'])
      res.status(405).end('Method not allowed!')
      break
  }

}
