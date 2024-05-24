import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            category_id: 1,
            name: "Legal",
            subname: "Criminal Defense",
            cost: "$0.00",
            slug: "legal",
            image_path: "http://localhost:3000/img/card1.png",
        },
        {
            category_id: 2,
            name: "People",
            subname: "Recruiting",
            cost: "$2.00",
            slug: "Startup",
            image_path: "http://localhost:3000/img/card1.png",
        },
        {
            category_id: 3,
            name: "Marketing",
            subname: "Content Marketing",
            cost: "$3.00",
            slug: "Marketing",
            image_path: "http://localhost:3000/img/card1.png",
        },
        {
            category_id: 4,
            name: "Startups",
            subname: "Idea Generation",
            cost: "$4.00",
            slug: "People",
            image_path: "http://localhost:3000/img/card1.png",
        },
    ]);
}