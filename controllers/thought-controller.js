const { User } = require("../models");

const userController = {

    getAllUsers(req,res) {
        User.find({})
        .populate({path: "thoughts", select:"-__v"})
        .populate({path: "friends", select: "-__v"})
        .sort({_id: -1})
        .then((dbUserData) => res.json(dbUserData))
        console.log(error);
        res.status(500).json(error);
    },
};

    getUserById({params}, res) {
        User.findOne({_id: params.userId})
        .select("-__v")
        .populate ({ path:friends,})
        .populate (thoughts,)

        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message:"No user found!"});
                return;
            }

        })

    },

    createUser({body}, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(error => res.status(400).json(error));
    },

    udpateUser({body}, res) {
        User.findOneAndUpdate({id:params.userId}, body, {
            new:true,

        })

        .then(dbUserData =>
            {
                if(!dbUserData) {
                    res.status(404).json({message:"No user found!"})
                    return;
                }
            })
    },

    removeUser({body}, res)