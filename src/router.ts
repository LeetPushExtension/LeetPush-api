import { Router } from 'express'

import { ProfileQuery } from './graphql/profile-query'

const router = Router()

async function fetchProfileData(username: string) {
  const req = {
    query: ProfileQuery,
    variables: { username }
  }

  try {
    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req)
    })

    return res.json()
  } catch (e) {
    console.error(e)
  }
}

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
