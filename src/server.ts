import express from 'express'
import morgan from 'morgan'
import { rateLimit } from 'express-rate-limit'
import cors from 'cors'
import router from './router'

const app = express()

app.use(cors())
app.options('*', cors())

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   limit: 15
// })

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(limiter)

app.get('/', (req, res) => {
  res.status(200)
  res.json({
    message: 'LeetPush API',
    totalSolvedProblems: '/:userId',
    dailyProblem: '/daily',
    last20Submissions: '/submissions/:userId'
  })
})

app.use('/api/v1', router)

export default app