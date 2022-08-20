import { NextApiRequest, NextApiResponse } from 'next'
import  {products}  from '../../../src/products'
import { Products } from '../../../interfaces'

type ResponseError = {
  message: string
}

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Products | ResponseError>
) {
  const { query } = req
  const { id } = query
  const filtered = products.filter((p) => p.id === id)

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Product with id: ${id} not found.` })
}