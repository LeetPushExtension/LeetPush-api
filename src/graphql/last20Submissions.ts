export const Last20SubmissionsQuery = `
query getRecentSubmissions($username: String!, $limit: Int = 20) {
  recentSubmissionList(username: $username, limit: $limit) {
    id
    lang
    time
    timestamp
    statusDisplay
    runtime
    url
    isPending
    title
    memory
    titleSlug
  }
 
}`;
