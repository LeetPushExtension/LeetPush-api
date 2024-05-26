import { Last20SubmissionsQuery } from '../graphql/last20Submissions';

export async function fetchLast20Submissions(username: string) {
  const body = {
    query: Last20SubmissionsQuery,
    variables: { username}
  };
    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    const submissions = (data as { data: { recentSubmissionList: any } })?.data?.recentSubmissionList;
    return submissions;
  
}