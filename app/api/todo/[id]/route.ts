import connectToDB from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";

interface Params{
    id: string
}

export async function PUT (req: NextRequest, {params} : {params: Params}) {

    await connectToDB();

    const isDone = await req.json();

    const updatedTodo = await TodoModel.findByIdAndUpdate(params.id, {isDone: isDone});

    if(!updatedTodo){
        return NextResponse.json("no id found")
    }
    // await newTodo.save();

    return NextResponse.json("Todo Updated Successfully✅", {status: 200})

}
