import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            category_id: 1,
            name: "Legal",
            cost: "$0.00",
            slug: "legal",
            image_path: "http://localhost:3000/img/card1.png",
        },
        {
            category_id: 2,
            name: "People",
            cost: "$0.00",
            slug: "legal",
            image_path: "http://localhost:3000/img/card1.png",
        },
        {
            category_id: 3,
            name: "Marketing",
            cost: "$0.00",
            slug: "legal",
            image_path: "http://localhost:3000/img/card1.png",
        },
        {
            category_id: 4,
            name: "Startups",
            cost: "$0.00",
            slug: "legal",
            image_path: "http://localhost:3000/img/card1.png",
        },
    ]);
}