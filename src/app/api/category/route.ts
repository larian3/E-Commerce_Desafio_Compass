
import { PrismaClient, Category} from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

//CREATE
export async function POST(request: NextRequest) {
  try {
    const newCategory = await request.json();
    const createdCategory = await prisma.category.create({
      data: newCategory,
    });

    return new NextResponse(JSON.stringify(createdCategory), {
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
	const category: Category[] = await prisma.category.findMany();

	return new NextResponse(JSON.stringify(category), {
		status: 200,
		statusText: 'OK',
	});
}