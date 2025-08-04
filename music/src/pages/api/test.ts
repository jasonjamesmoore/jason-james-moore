// pages/api/test.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("METHOD:", req.method);
  return res.status(200).json({ message: "Test OK" });
}
