import { PrismaClient, Category } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

// CREATE
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
  } catch (error: any) {
    console.error('Error creating category', error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
  
}

// READ
export async function GET(_: NextRequest) {
  try {
    const categories: Category[] = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(categories), {
      status: 200,
      statusText: 'OK',
    });
  } catch (error) {
    console.error('Error fetching categories', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
}
