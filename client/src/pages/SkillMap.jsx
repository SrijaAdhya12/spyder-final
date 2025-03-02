
import { useState } from "react";
import { MapPin, User } from "react-feather";

const dummyUsers = [
	{ id: 1, name: "Alice", skill: "Guitar", location: "New York" },
	{ id: 2, name: "Bob", skill: "Cooking", location: "Los Angeles" },
	{ id: 3, name: "Charlie", skill: "Photography", location: "Chicago" },
	{ id: 4, name: "Diana", skill: "Coding", location: "San Francisco" },
];

function SkillMap() {
	const [users] = useState(dummyUsers);

	return (
		<section className="container mx-auto py-12">
			<h2 className="text-3xl font-bold mb-8">Skill Map</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{users.map((user) => (
					<div
						key={user.id}
						className="border rounded-lg p-6 bg-white shadow-md"
					>
						<div className="flex items-center mb-4">
							<User className="h-10 w-10 mr-4 text-gray-500" />
							<div>
								<h3 className="font-semibold">{user.name}</h3>
								<p className="text-sm text-gray-600">{user.skill}</p>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-sm flex items-center text-gray-600">
								<MapPin className="h-4 w-4 mr-2" />
								{user.location}
							</p>
							<button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition-colors">
								Request Swap
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default SkillMap;
