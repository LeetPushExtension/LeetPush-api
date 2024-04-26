import { ProfileQuery } from '../graphql/profile-query'

export async function fetchProfileData(username: string) {
  const body = {
    query: ProfileQuery,
    variables: { username }
  }

  try {
    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await res.json()

    const {
      data: {
        allQuestionsCount,
        matchedUser: {
          submitStatsGlobal: {
            acSubmissionNum
          }
        }
      }
    }: any = data

    return { acSubmissionNum, allQuestionsCount }
  } catch (e) {
    console.error(e)
    throw new Error('An error occurred while fetching user profile data')
  }
}
