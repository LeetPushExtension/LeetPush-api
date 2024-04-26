// export const ProfileQuery = `query ($username: String!) {
//   allQuestionsCount {
//     difficulty
//     count
//   }
//   matchedUser(username: $username) {
//     username
//     socialAccounts
//     githubUrl
//     contributions {
//       points
//       questionCount
//       testcaseCount
//     }
//     profile {
//       realName
//       websites
//       countryName
//       skillTags
//       company
//       school
//       starRating
//       aboutMe
//       userAvatar
//       reputation
//       ranking
//     }
//     badges {
//       id
//       displayName
//       icon
//       creationDate
//     }
//     upcomingBadges {
//       name
//       icon
//     }
//     activeBadge {
//       id
//     }
//   }
//   }
// `

export const ProfileQuery = `
query userProblemsSolved($username: String!) {
  allQuestionsCount {
    difficulty
    count
  }
  matchedUser(username: $username) {
    submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
      }
    }
  }
}
`
