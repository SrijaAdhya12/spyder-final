import { MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const dummyUsers = [
	{ id: 1, name: "Alice", skill: "Guitar", location: "New York" },
	{ id: 2, name: "Bob", skill: "Cooking", location: "Los Angeles" },
	{ id: 3, name: "Charlie", skill: "Photography", location: "Chicago" },
	{ id: 4, name: "Diana", skill: "Coding", location: "San Francisco" },
];

const SkillMap = () => {
	return (
		<section id="skill-map" className="container py-24 md:py-32">
			<h2 className="text-3xl font-bold mb-8">Skill Map</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{dummyUsers.map((user) => (
					<div key={user.id} className="border rounded-lg p-6 bg-background">
						<div className="flex items-center mb-4">
							<User className="h-10 w-10 mr-4" />
							<div>
								<h3 className="font-semibold">{user.name}</h3>
								<p className="text-sm text-muted-foreground">{user.skill}</p>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-sm flex items-center">
								<MapPin className="h-4 w-4 mr-2" />
								{user.location}
							</p>
							<Button size="sm">Request Swap</Button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default SkillMap