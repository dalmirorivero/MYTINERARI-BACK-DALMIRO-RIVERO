import User from "../models/User.js";

const usersManager = {
    // CREATE 
    createUser: async (req, res) => {
        try {
            await User.create(req.body)
            res.status(201).json({
                success: true,
                message: 'User created!'
            })
        } catch (error) {
            res.status(500).json({ error })
        }
    },

    // READ 
    getUsers: async (req, res) => {
        try {
            const users = await User.find()
            res.status(201).json({ response: users })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getUserById: async (req, res, next) => {
        try {
            const { id } = (req.params)
            const user = await User.findById(id)
            if (user) {
                res.status(201).json({ response: user })
            }
            else {
                res.status(404).json({
                    success: false,
                    message: 'User id not found!'
                })
            }
        } catch (error) {
            next(error)
        }
    },

    // UPDATE
    updateUser: async (req, res, next) => {
        try {
            const { id } = (req.params)
            const data = (req.body)
            const user = await User.findByIdAndUpdate(id, data, { new: true })
            if (user && data) {
                res.status(201).json({
                    succes: true,
                    message: 'User updated!',
                    response: user
                })
            }
            else {
                res.status(404).json({
                    success: false,
                    message: 'User id not found!'
                })
            }
        } catch (error) {
            next(error)
        }
    },

    // DELETE
    deleteUser: async (req, res, next) => {
        try {
            const { id } = (req.params)
            const user = await User.findByIdAndDelete(id)
            if (user) {
                res.status(201).json({
                    succes: true,
                    message: 'User deleted!'
                })
            }
            else {
                res.status(404).json({
                    success: false,
                    message: 'User id not found!'
                })
            }
        } catch (error) {
            next(error)
        }
    }
};

export default usersManager;