// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import  {products}  from '../../src/products'
import { Products } from '../../interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products[]>
) {
  res.status(200).json(products)
}
