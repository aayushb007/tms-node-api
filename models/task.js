const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    user_id:{
            type : mongoose.Schema.Types.ObjectId,
             ref : "Users",
        },
  title:{
    type: String,
      required: true,
  },
  desc:{
    type: String,
    required: true,
  },
  due_date:{
    type: Date,
    required: true,
  },
  status:{
    type: String,
    required: true,
  }
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;
