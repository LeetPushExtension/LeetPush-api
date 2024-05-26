import { ProfileQuery } from '../graphql/profile-query';

interface SubmissionStats {
  difficulty: string;
  count: number;
}

export async function fetchProfileData(username: string): Promise<{ acSubmissionNum: SubmissionStats[], allQuestionsCount: SubmissionStats[] }> {
  const body = {
    query: ProfileQuery,
    variables: { username }
  };

    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await res.json() as { data: { allQuestionsCount: any, matchedUser: { submitStatsGlobal: { acSubmissionNum: any } } } };

    const allQuestionsCount = data?.data?.allQuestionsCount;
    const acSubmissionNum = data?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
    return { acSubmissionNum, allQuestionsCount };
  } 

