// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma';

// type Data = {
//   name: string
// }

export const getData = async () => {
  return await prisma.post.findMany({
    where: { published: true }
    })
  }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({data: getData()})
  }
