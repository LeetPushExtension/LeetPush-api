import { DailyProblemQuery } from '../graphql/dailyProblem-query';

interface TopicTag {
  name: string;
  slug: string;
  translatedName?: string;
}

interface DailyProblem {
  date: string;
  link: string;
  questionFrontendId: string;
  title: string;
  titleSlug: string;
  difficulty: string;
  topicTags: TopicTag[];
}

export async function fetchDailyProblem(): Promise<DailyProblem> {
  const body = {
    query: DailyProblemQuery
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

    const data = await res.json() as { data: { activeDailyCodingChallengeQuestion: any } };

    const dailyProblem = data?.data?.activeDailyCodingChallengeQuestion;
    const question = dailyProblem?.question;

    if (!dailyProblem || !question) {
      throw new Error('Incomplete data received from API');
    }

    const {
      date,
      link,
      question: {
        questionFrontendId,
        title,
        titleSlug,
        difficulty,
        topicTags
      }
    } = dailyProblem;

    return {
      date,
      link,
      questionFrontendId,
      title,
      titleSlug,
      difficulty,
      topicTags
    };
  } catch (e) {
    console.error('Error fetching daily problem:', e);
    throw new Error('An error occurred while fetching the daily problem data');
  }
}
