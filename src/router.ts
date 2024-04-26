import { Router } from 'express'

import { fetchProfileData } from './modules/profile-fetch'

const router = Router()

router.get('/:userId', async (req, res) => {
  const userId = req.params.userId

  try {
    const req = await fetchProfileData(userId)
    if (!req) {
      return res.status(500).json({ error: 'Failed to fetch user profile data' })
    }

    return res.json({ req })
  } catch (error) {
    console.error('Error fetching user profile data:', error)
    return res.status(500).json({ error: 'An error occurred while fetching user profile data' })
  }
})

export default router
