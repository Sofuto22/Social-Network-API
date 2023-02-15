const { Schema, model } = require("mongoose");
const { User } = require(".");

const UserSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
        match:[/^([a-z0-9_\.-]+)@({10,16})$/]
    },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought"
    }],

    friends:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    
})

const User = model("User",UserSchema);

module.export = User;