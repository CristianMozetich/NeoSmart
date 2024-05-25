import { NextResponse } from "next/server";

//API DE USUARIOS
export async function GET() {
    return NextResponse.json([
        {
            id: 1,
            name: "Diego",
        },
    ]);
}