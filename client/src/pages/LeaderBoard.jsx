
import { useState } from "react"
import { Award } from "react-feather"

const dummyLeaderboard = [
  { id: 1, name: "Alice", skillCoins: 1200, rank: 1 },
  { id: 2, name: "Bob", skillCoins: 1100, rank: 2 },
  { id: 3, name: "Charlie", skillCoins: 1000, rank: 3 },
  { id: 4, name: "Diana", skillCoins: 900, rank: 4 },
  { id: 5, name: "Eva", skillCoins: 800, rank: 5 },
]

function Leaderboard() {
  const [leaders] = useState(dummyLeaderboard)

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Leaderboard</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Skill Coins
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaders.map((leader) => (
              <tr key={leader.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {leader.rank === 1 && <Award className="h-5 w-5 text-yellow-400 mr-2" />}
                    {leader.rank}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{leader.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{leader.skillCoins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Leaderboard

