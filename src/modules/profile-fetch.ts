// import { ProfileQuery } from '../graphql/profile'
//
// async function getProfileData(username: string) {
//   try {
//     const response = await fetch('https://leetcode.com/graphql', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         query: ProfileQuery,
//         variables: { username }
//       })
//     })
//
//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.status}`)
//     }
//
//     return response.json()
//   } catch (e) {
//     console.error('Error fetching user profile data:', e)
//     return null
//   }
// }
