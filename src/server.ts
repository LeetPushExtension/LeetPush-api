import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './router'

const app = express()

app.use(cors())
app.options('*', cors())

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200)
  res.json({
    message: 'Welcome to LeetPush API',
    totalSolvedProblems: '/api/v1/:userId',
    dailyProblem: '/api/v1/daily',
    last20Submissions: '/api/v1/submissions/:userId',
    profileCalendar : '/api/v1/userProfileCalendar/:username/:year'
  })
})

app.use('/api/v1', router)

export default app