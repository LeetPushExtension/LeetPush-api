import { Router } from 'express'

import { fetchProfileData } from './modules/profile-fetch'
import { fetchDailyProblem } from './modules/dailyProblem-fetch'

const router = Router()

router.get('/', async (req, res) => {
  return res.status(200).json({
    message: 'Welcome to LeetPush API',
    totalSolvedProblems: '/:userId',
    dailyProblem: '/daily'
  })
})

router.get('/daily', async (req, res) => {
  try {
    const data = await fetchDailyProblem()
    if (!data) {
      return res.status(500).json({ error: 'Failed to fetch user daily problem' })
    }

    return res.status(200).json({ data })
  } catch (e) {
    console.error('Error fetching daily problem:', e)
    return res.status(500).json({ error: 'An error occurred while fetching daily problem data' })
  }
})

router.get('/:userId', async (req, res) => {
  const userId = req.params.userId

  try {
    const data = await fetchProfileData(userId)
    if (!data) {
      return res.status(500).json({ error: 'Failed to fetch user profile data' })
    }

    return res.status(200).json({ data })
  } catch (e) {
    console.error('Error fetching user profile data:', e)
    return res.status(500).json({ error: 'An error occurred while fetching user profile data' })
  }
})

export default router
