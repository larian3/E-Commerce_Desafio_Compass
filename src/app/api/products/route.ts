
import { PrismaClient, Products} from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

//CREATE
export async function POST(request: NextRequest) {
  try {
    const newProduct = await request.json();
    const createdProduct = await prisma.products.create({
      data: newProduct,
    });

    return new NextResponse(JSON.stringify(createdProduct), {
      status: 201,
      statusText: 'Created',
    });
  } catch (error: any) { // Definindo o tipo do erro como 'any'
    console.error('Error creating product', error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
}


//READ
export async function GET() {
	const product: Products[] = await prisma.products.findMany();

	return new NextResponse(JSON.stringify(product), {
		status: 200,
		statusText: 'OK',
	});
}