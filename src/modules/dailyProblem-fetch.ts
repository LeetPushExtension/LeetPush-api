import { DailyProblemQuery } from '../graphql/dailyProblem-query'


export async function fetchDailyProblem() {
  const body = {
    query: DailyProblemQuery
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
      data:
        {
          activeDailyCodingChallengeQuestion: {
            date,
            link,
            question: {
              questionFrontendId,
              title,
              titleSlug,
              difficulty,
              topicTags
            }
          }
        }
    }: any = data

    return {
      date,
      link,
      questionFrontendId,
      title,
      titleSlug,
      difficulty,
      topicTags
    }
  } catch (e) {
    console.error(e)
    throw new Error('An error occurred while fetching user profile data')
  }
}
