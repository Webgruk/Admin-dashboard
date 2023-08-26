import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import clientRoute from './routes/client.js'
import generalRoute from './routes/general.js'
import managementRoute from './routes/management.js'
import salesRoute from './routes/sales.js'

//data import
import User from './models/User.js'

import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataOverallStat,
  dataAffiliateStat,
  dataTransaction,
} from './Data/index.js'
import Transaction from './models/Transaction.js'
import Product from './models/Product.js'
import ProductStat from './models/ProductStat.js'
import OverallStat from './models/OverallStat.js'
import AffiliateStat from './models/AffiliateStat.js'

// CONFIGURATION
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES

app.use('/client', clientRoute)
app.use('/general', generalRoute)
app.use('/management', managementRoute)
app.use('/sales', salesRoute)

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

    // User.insertMany(dataUser)
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)
    // OverallStat.insertMany(dataOverallStat)
    // AffiliateStat.insertMany(dataAffiliateStat)
  })
  .catch((error) => console.log(`${error}  did not connect`))
