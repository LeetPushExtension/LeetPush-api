import { Router } from 'express';
import { fetchProfileData } from './modules/profile-fetch';
import { fetchDailyProblem } from './modules/dailyProblem-fetch';
import { fetchLast20Submissions } from './modules/submissions-fetch';
import { fetchUserProfileCalendar } from './modules/profileCalendar-fetch';


const router = Router();

router.get('/', async (req, res) => {
  return res.status(200).json({
    message: 'Welcome to LeetPush API',
    totalSolvedProblems: '/:userId',
    dailyProblem: '/daily',
    last20Submissions: '/submissions/:userId'
  });
});

router.get('/daily', async (req, res) => {
  try {
    const data = await fetchDailyProblem();
    if (!data) {
      return res.status(500).json({ error: 'Failed to fetch daily problem' });
    }

    return res.status(200).json({ data });
  } catch (e) {
    console.error('Error fetching daily problem:', e);
    return res.status(500).json({ error: 'An error occurred while fetching daily problem data' });
  }
});

router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const data = await fetchProfileData(userId);
    if (!data) {
      return res.status(500).json({ error: 'Failed to fetch user profile data' });
    }

    return res.status(200).json({ data });
  } catch (e) {
    console.error('Error fetching user profile data:', e);
    return res.status(500).json({ error: 'An error occurred while fetching user profile data' });
  }
});

router.get('/submissions/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const data = await fetchLast20Submissions(userId);
    if (!data) {
      return res.status(500).json({ error: 'Failed to fetch submissions data' });
    }

    return res.status(200).json({ data });
  } catch (e) {
    console.error('Error fetching submissions data:', e);
    const error = e as Error;
    return res.status(500).json({ error: `An error occurred while fetching submissions data: ${error.message}` });
  }
});
router.get('/userProfileCalendar/:username/:year', async (req, res) => {
  const { username, year } = req.params;
  
  try {
    const userCalendar = await fetchUserProfileCalendar(username, parseInt(year, 10));
    res.json(userCalendar);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
