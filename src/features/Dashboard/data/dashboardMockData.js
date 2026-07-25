export const dashboardMockData = {
  cards: [
    { id: 'github', title: 'GitHub', stat: '47 repos', sub: '482 followers', route: '/github', color: '#1e293b' },
    { id: 'leetcode', title: 'LeetCode', stat: '612 solved', sub: 'Rating 1847', route: '/leetcode', color: '#2563eb' },
    { id: 'neetcode', title: 'NeetCode', stat: '62% complete', sub: '12 categories', route: '/neetcode', color: '#0ea5e9' },
    { id: 'manual', title: 'Manual Tracker', stat: '5 active', sub: 'JEE, Gym, Web Dev...', route: '/manual-tracker', color: '#16a34a' },
    { id: 'goals', title: 'Goals', stat: '5 goals', sub: '3 on track', route: '/goals', color: '#f59e0b' },
    { id: 'friends', title: 'Friends', stat: '4 friends', sub: '2 online now', route: '/friends', color: '#8b5cf6' },
    { id: 'leaderboard', title: 'Leaderboard', stat: 'Rank #4', sub: 'Weekly', route: '/leaderboard', color: '#dc2626' }
  ],
  weeklyActivity: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], values: [4, 7, 3, 9, 6, 8, 5] },
  recentActivity: [
    { id: 1, text: 'Solved "Merge Intervals" on LeetCode', time: '2026-07-24T09:00:00' },
    { id: 2, text: 'Updated progress on JEE Preparation tracker', time: '2026-07-23T20:15:00' },
    { id: 3, text: 'Pushed 3 commits to codesphere-frontend', time: '2026-07-23T14:40:00' },
    { id: 4, text: 'Completed NeetCode Sliding Window topic', time: '2026-07-22T11:00:00' }
  ],
  quickActions: [
    { id: 1, label: 'New Manual Tracker', route: '/manual-tracker' },
    { id: 2, label: 'View Analytics', route: '/analytics' },
    { id: 3, label: 'Check Leaderboard', route: '/leaderboard' },
    { id: 4, label: 'Add a Friend', route: '/friends' }
  ]
}
