const mongoose=require("mongoose")

const connect=mongoose.connect("mongodb+srv://ashiq:Rashiq@cluster0.bqvhbdc.mongodb.net/taskPlanner?retryWrites=true&w=majority")

module.exports={
   connect
}