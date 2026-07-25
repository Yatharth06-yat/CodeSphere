const rawUsers = [
  { rank: 1, name: 'Ananya Iyer', username: 'ananya_i', avatar: 'https://i.pravatar.cc/100?img=45', points: 9840 },
  { rank: 2, name: 'Dev Patel', username: 'dev_p', avatar: 'https://i.pravatar.cc/100?img=22', points: 9510 },
  { rank: 3, name: 'Priya Sharma', username: 'priya_codes', avatar: 'https://i.pravatar.cc/100?img=32', points: 9270 },
  { rank: 4, name: 'Arjun Mehta', username: 'arjun-dev', avatar: 'https://i.pravatar.cc/100?img=12', points: 8950 },
  { rank: 5, name: 'Sneha Kapoor', username: 'sneha_k', avatar: 'https://i.pravatar.cc/100?img=47', points: 8700 },
  { rank: 6, name: 'Vikram Singh', username: 'vikrams', avatar: 'https://i.pravatar.cc/100?img=51', points: 8420 },
  { rank: 7, name: 'Rohan Verma', username: 'rohanv', avatar: 'https://i.pravatar.cc/100?img=15', points: 8105 },
  { rank: 8, name: 'Meera Nair', username: 'meera_n', avatar: 'https://i.pravatar.cc/100?img=29', points: 7890 },
  { rank: 9, name: 'Karan Mehta', username: 'karanm', avatar: 'https://i.pravatar.cc/100?img=8', points: 7622 },
  { rank: 10, name: 'Ishaan Roy', username: 'ishaan_r', avatar: 'https://i.pravatar.cc/100?img=60', points: 7340 }
]

export const leaderboardMockData = {
  weekly: rawUsers,
  monthly: rawUsers.map((u) => ({ ...u, points: Math.round(u.points * 3.4) })),
  global: rawUsers.map((u) => ({ ...u, points: Math.round(u.points * 11.2) })),
  friends: rawUsers.slice(0, 4)
}
