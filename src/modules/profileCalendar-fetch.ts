import { userProfileCalendarQuery } from '../graphql/profileCalendar';

export async function fetchUserProfileCalendar(username: string, year: number) {
  const body = {
    query: userProfileCalendarQuery,
    variables: { username, year }
  };

  const res = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const result = await res.json() as any;

  let userCalendar = result.data.matchedUser?.userCalendar;

  let submissionCalendar = userCalendar.submissionCalendar;
  if (typeof submissionCalendar === 'string') {
    submissionCalendar = JSON.parse(submissionCalendar);
  }

  const transformedSubmissionCalendar: { [key: string]: number } = {};

  for (const [timestamp, count] of Object.entries(submissionCalendar)) {
    const parsedTimestamp = parseInt(timestamp, 10);
    const date = new Date(parsedTimestamp * 1000).toISOString().split('T')[0];
    transformedSubmissionCalendar[date] = Number(count);
  }

  return {
    ...userCalendar,
    submissionCalendar: transformedSubmissionCalendar
  };
}
