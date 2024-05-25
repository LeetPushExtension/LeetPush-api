import { Last20SubmissionsQuery } from '../graphql/last20Submissions';

export async function fetchLast20Submissions(username: string) {
  const body = {
    query: Last20SubmissionsQuery,
    variables: { username, limit: 20 }
  };

  try {
    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    const data = await res.json();
    const submissions = (data as { data: { recentSubmissionList: any } })?.data?.recentSubmissionList;

    if (!submissions) {
        throw new Error('Incomplete data received from API');
    }

    return submissions;
  } catch (e) {
    console.error('Error fetching submissions:', e);
    throw new Error(`An error occurred while fetching submissions data: ${(e as Error).message}`);
  }
}