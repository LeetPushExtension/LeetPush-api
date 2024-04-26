export interface ProfileQueryI {
  allQuestionsCount: {
    difficulty: string;
    count: number;
  }[];
  matchedUser: {
    username: string;
    socialAccounts: null | any[];
    githubUrl: string;
    contributions: {
      points: number;
      questionCount: number;
      testcaseCount: number;
    };
    profile: {
      realName: string;
      websites: string[];
      countryName: string;
      skillTags: string[];
      company: string | null;
      school: string | null;
      starRating: number;
      aboutMe: string;
      userAvatar: string;
      reputation: number;
      ranking: number;
    };
    submitStats: {
      acSubmissionNum: {
        difficulty: string;
        count: number;
        submissions: number;
      }[];
      totalSubmissionNum: {
        difficulty: string;
        count: number;
      }
    }
  }
}
