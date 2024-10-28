
// shape-ka model-keena sida uu noqonaayo ayaan shegena

import { Model, model, models, Schema } from "mongoose";

interface TodoDocument extends Document {

    title: string;
    isDone: boolean

}

const todoSchema = new Schema(
   {
    title:{
        type: String,
        required: true
    },
    isDone: {
        type: String,
        default: false
    }
},
{
    timestamps: true   
}
)

// maadama nextJs maanto dhan refresh sameeneso wxa dhaheen hadu jiro wxa samenena haddu model jiro asi isticmaal
//  hadi usan jirinna kan samee o isticmaal

const TodoModel = models.Todo || model("Todo", todoSchema);

// si uu autoCompletion no siiyo ayan isticmaalena type assertion waa generic type-kiisana waa todoDocument
// model-kaan type-liisa waatodo Doucment 

export default TodoModel as Model<TodoDocument>



