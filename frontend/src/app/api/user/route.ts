import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            id: 1,
            name: "Fabi",
        },
        {
            id: 2,
            name: "Cristian",
        },
        {
            id: 3,
            name: "Sandra",
        },
        {
            id: 4,
            name: "Francisca",
        },
    ]);
}