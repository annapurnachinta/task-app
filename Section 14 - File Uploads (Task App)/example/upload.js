const express = require('../../node_modules/express')
const Users = require('../model/user')
const router = new express.Router()
const auth = require('../middleware/auth')
const multer = require('../../node_modules/multer')

router.post('/users', async (req, res) =>{
    const user = new Users(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/users/login', async (req, res) =>{
    try {
        const user = await Users.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/logout', auth, async (req, res) =>{
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.status(201).send()
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/logoutAll', auth, async (req, res) =>{
    try {
        req.user.tokens = []
        await req.user.save()

        res.status(201).send()
    } catch (e) {

        res.status(400).send(e)
    }
})

router.get('/users', async (req, res) =>{
    try {
        const users = await Users.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/users/me', auth, async (req, res) =>{
    res.status(201).send(req.user)
})

// router.get('/users/:id', async (req, res) =>{
//     try {
//         const user = await Users.findById(req.params.id)
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch (e) {
//         res.status(500).send(e)
//     }
// })

router.patch('/users/me', auth, async (req, res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(404).send({error: 'invalid updates!'})
    }
    try {
        updates.forEach((update) => req.user[update] = req.body[update]);

        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
      await req.user.deleteOne()
      res.send(req.user)
    } catch (err) {
      res.status(500).send(err.message)
    }
  })

  const upload = multer({
    dest: 'avatar',
    limits: {
         fileSize: 1000000 
    },
    fileFilter(req, file, cb){
        // if(!file.originalname.endsWith('.pdf')){
        //     return cb(new Error('File must be a PDF'))
        // }

        // if(!file.originalname.match(/\.(doc|docx)$/)){
        //     return cb(new Error('File must be a DOC'))
        // }

        if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
            return cb(new Error('please upload an image'))
        }

        cb(undefined, true)
        cb(undefined, false)
    },

})

router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    
    res.send()
  }, (error, req, res, next) => {
    res.status(500).send(error.message)
  })

module.exports = router