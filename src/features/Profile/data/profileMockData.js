export const profileMockData = {
  name: 'Arjun Mehta',
  username: 'arjun-dev',
  avatar: 'https://i.pravatar.cc/150?img=12',
  bio: 'Full-stack developer. Building in public. Open source enthusiast.',
  location: 'Bengaluru, India',
  joined: '2019-03-14',
  stats: { problemsSolved: 612, repos: 47, streak: 41, points: 8950 },
  platforms: [
    { name: 'GitHub', handle: '@arjun-dev', connected: true },
    { name: 'LeetCode', handle: 'arjun_dev', connected: true },
    { name: 'NeetCode', handle: 'arjundev', connected: true },
    { name: 'Codeforces', handle: '-', connected: false }
  ],
  achievements: [
    { id: 1, title: '100 Day Streak', icon: '🔥' },
    { id: 2, title: 'Top 5% Contest Rating', icon: '🏆' },
    { id: 3, title: '500+ Problems Solved', icon: '💯' },
    { id: 4, title: 'Open Source Contributor', icon: '🌱' }
  ],
  timeline: [
    { id: 1, event: 'Reached #48,213 global LeetCode rank', date: '2026-07-20' },
    { id: 2, event: 'Completed NeetCode Trees section', date: '2026-07-15' },
    { id: 3, event: 'Merged PR to codesphere-frontend', date: '2026-07-10' },
    { id: 4, event: 'Joined CodeSphere', date: '2026-01-05' }
  ]
}
