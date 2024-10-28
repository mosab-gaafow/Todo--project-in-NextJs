import connectToDB from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {

    await connectToDB();

    const body = await req.json();
    console.log(body);

    const newTodo = new TodoModel({
        title: body.title,
        isDone: body.isDone
    });

    await newTodo.save();

    return NextResponse.json("Todo Registered Successfully✅", {status: 200})

}

export async function GET (req:NextRequest) {

    const todos = await TodoModel.find().sort({createdAt: "desc", isDone: "asc"});

    // console.log(todos)
    return NextResponse.json(todos, {status: 200})

}




