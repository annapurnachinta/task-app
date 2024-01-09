const express = require('../../node_modules/express')
const Tasks = require('../model/task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/tasks', auth, async (req, res) =>{
    const task = new Tasks({
        ...req.body, 
        author: req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/tasks', auth, async (req, res) =>{
    const match = {}
    const sort = {}

    if (req.query.status) {
        match.status = req.query.status === 'true' 
    }

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
        }
    
    try {

        // const task = await Tasks.find({author: req.user._id})

        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.limit) * parseInt(req.query.skip - 1),
                sort
            }
        })
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/tasks/:id', auth, async (req, res) =>{ 
    const _id = req.params.id
    try {
        const task = await Tasks.findOne({_id, author: req.user._id })
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/tasks/:id', auth, async (req, res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'status']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(404).send({error: 'invalid updates!'})
    }
    try {
        const task = await Tasks.findOne({_id: req.params.id, author: req.user._id })
        
        if(!task){
            return res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) =>{
    try {
        const task = await Tasks.findOneAndDelete({_id: req.params.id, author: req.user._id})
        // const task = await Tasks.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router