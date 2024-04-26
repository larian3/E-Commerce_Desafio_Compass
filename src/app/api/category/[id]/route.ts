import { Category,  PrismaClient} from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

type FindById = {
	id: string;
};

export async function GET(request: NextRequest, context: { params: FindById }) {
	try {
		const category: Category = await prisma.category.findUniqueOrThrow({
			where: {
				id: Number(context.params.id),
			},
		});

		return new NextResponse(JSON.stringify(category), {
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

//UPDATE
export async function PUT(request: NextRequest, context: { params: FindById }) {
	const newCategoryData: Category = await request.json();

	try {
		const updatedCategory: Category = await prisma.category.update({
			where: {
				id: Number(context.params.id),
			},
			data: newCategoryData,
		});

		return new NextResponse(JSON.stringify(updatedCategory), {
			status: 200,
			statusText: 'OK',
		});
	} catch (error) {
		const msgError = (error as PrismaClientKnownRequestError).meta?.cause;

		return new NextResponse(JSON.stringify({ message: msgError }), {
			status: 404,
			statusText: 'Not Found',
		});
	}
}

//DELETE
export async function DELETE(
	request: NextRequest,
	context: { params: FindById }
) {
	try {
		await prisma.category.delete({
			where: {
				id: Number(context.params.id),
			},
		});

		return new NextResponse(null, {
			status: 204,
			statusText: 'No Content',
		});
	} catch (error) {
		const msgError = (error as PrismaClientKnownRequestError).meta?.cause;

		return new NextResponse(JSON.stringify({ message: msgError }), {
			status: 404,
			statusText: 'Not Found',
		});
	}
}