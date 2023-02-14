const { Thought, User } = require("../models");
const { getAllUsers } = require("./user-controller");

const thoughtController = { 

    getAllThoughts(req, res) {
        Thought.find({})
        .populate({path: "reactions", select: "-__v"})
        .select("-__v")
        .sort({_id: -1})
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            res.status(400).json(err)
           });
        },

     getThoughtById({params}, res) {
        Thought.fineOne({_id: params.thoughtsId})
        
        .popluate({path: "reactions", select: "-__v"})
        
        .then(dbThoughtsData => {
            if(!dbThoughtsData)
            {res.status(404).json({message: "No Thoughts Found"});
            return;
            }
            res.json(dbThoughtsData)
        
        });
        
     }   

}
