import exp from 'express'
import { hash } from 'bcryptjs'
import { UserModel } from '../models/user_model.js'
import { ProductModel } from '../models/product_model.js'

const userApp = exp.Router()
userApp.use(exp.json())

// create user (matches testing.http: POST /user)
userApp.post('/user', async (req, res, next) => {
  try {
    const payload = req.body
    if (!payload.password) return res.status(400).json({ message: 'Password required' })
    const hashed = await hash(payload.password, 10)
    payload.password = hashed
    const u = new UserModel(payload)
    await u.save()
    res.status(201).json({ message: 'User created', payload: { id: u._id } })
  } catch (err) {
    next(err)
  }
})

// get all users (matches testing.http: GET /user)
userApp.get('/user', async (req, res, next) => {
  try {
    const users = await UserModel.find({}, { password: 0, __v: 0 })
    res.status(200).json({ message: 'users', payload: users })
  } catch (err) {
    next(err)
  }
})

// add product to user cart: PUT /user/user-id/:uid/product-id/:pid
userApp.put('/user/user-id/:uid/product-id/:pid', async (req, res, next) => {
  try {
    const { uid, pid } = req.params
    const qty = Number(req.body?.quantity ?? 1)

    const user = await UserModel.findById(uid)
    if (!user) return res.status(404).json({ message: 'User not found' })

    const product = await ProductModel.findOne({ pid: Number(pid) })
    // support lookup by numeric pid (product.pid) or by _id
    let productId = null
    if (product) productId = product._id
    else {
      // try as ObjectId
      const p2 = await ProductModel.findById(pid)
      if (p2) productId = p2._id
    }
    if (!productId) return res.status(404).json({ message: 'Product not found' })

    const prodDoc = await ProductModel.findById(productId)

    // check existing
    const existing = user.cart.find((c) => c.product && c.product.toString() === productId.toString())
    if (existing) {
      existing.quantity = Math.max(1, (existing.quantity || 0) + qty)
    } else {
      user.cart.push({ product: productId, quantity: qty })
    }

    await user.save()
    const populated = await UserModel.findById(uid).populate('cart.product')
    res.status(200).json({ message: 'Cart updated', payload: populated })
  } catch (err) {
    next(err)
  }
})

// get user by id (matches testing.http: GET /user/:id)
userApp.get('/user/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await UserModel.findById(id).populate('cart.product')
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(200).json({ message: 'user', payload: user })
  } catch (err) {
    next(err)
  }
})

export default userApp
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

export function verifytoken(req, res, next) {
    // token verification middleware
    let signedtoken = req.cookies.token;
    console.log("Token from cookies:", signedtoken);
    if (!signedtoken) {
        return res.status(401).json({ message: "No token provided" });
    }

    // verify token
    let decodedtoken = jwt.verify(signedtoken, 'secretkey')
    console.log("Decoded Token:", decodedtoken);
    next();
}