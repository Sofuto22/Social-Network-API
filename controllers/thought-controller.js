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
    },

    createThought({params, body}, res) {
        Thought.create(body)
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(error => res.status(400).json(error))
        return getAllUsers.findOneAndUpdate({_id:params.thoguhtId});
    },

    deleteThought ({params}, res) {
        Thought.findOneAndDelete({_id:params.id})
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.statuus(404).json({mesaage:"No Thoughts Found"});
                return;
            }
            res.json(dbThoughtData);
        })
        },

        createReaction({params,body}, res) {
            Thought.create({_id:params.thoughtId}, {reactions: body}),
            {new: true}
            .populate({path: "reactions", select:_id})
            select("-__v")
            .then(dbThoughtData=> {
                if(!dbThoughtData) {
                    res.statuus(404).json({mesaage:"No Thoughts Found"});
                    return;
                }
                res.json(dbThoughtData);
        })
    },
    
        
       

}
