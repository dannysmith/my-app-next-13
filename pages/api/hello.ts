// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma';

type Data = {
  data: string
}

// Not currentlyusing this, but calling getData() should return stuff from the DB
export const getData = async () => {
  return await prisma.post.findMany({
    where: { published: true }
    })
  }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({data: "bob"})
  }
