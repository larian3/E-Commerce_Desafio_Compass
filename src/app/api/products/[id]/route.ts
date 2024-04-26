import { Products,  PrismaClient} from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextResponse, NextRequest } from 'next/server';

const prisma = new PrismaClient();

type FindById = {
	id: string;
};

export async function GET(request: NextRequest, context: { params: FindById }) {
	try {
		const product: Products = await prisma.products.findUniqueOrThrow({
			where: {
				id: Number(context.params.id),
			},
		});

		return new NextResponse(JSON.stringify(product), {
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
	const newProductData: Products = await request.json();

	try {
		const updatedProduct: Products = await prisma.products.update({
			where: {
				id: Number(context.params.id),
			},
			data: newProductData,
		});

		return new NextResponse(JSON.stringify(updatedProduct), {
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
		await prisma.products.delete({
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