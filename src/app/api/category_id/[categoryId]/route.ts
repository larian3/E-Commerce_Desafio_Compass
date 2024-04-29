// route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

type FindById = {
  categoryId: number;
};

export async function GET(request: NextRequest, context: { params: FindById }) {
  
  try {
    // Aqui você pode buscar os produtos da categoria com o ID fornecido
    const products = await prisma.products.findMany({
      where: {
        categoryId: Number(context.params.categoryId),
      },
    });

    return new NextResponse(JSON.stringify(products), {
			status: 200,
			statusText: 'OK',
		});
  } catch (error) {
		const msgError = (error as PrismaClientKnownRequestError).message;

		return new NextResponse(JSON.stringify({ message: msgError }), {
			status: 404,
			statusText: 'Not Found',
		});
	}
}
function getProductsByCategoryId(req: any, NextApiRequest: any, res: any, NextApiResponse: any) {
  throw new Error('Function not implemented.');
}

