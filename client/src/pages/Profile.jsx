
import { FaCoins } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPin, Briefcase, Calendar } from "lucide-react";

export default function Profile() {
	// Dummy profile data
	const profile = {
		name: "Alex Johnson",
		role: "Senior Software Engineer",
		email: "alex.johnson@example.com",
		location: "San Francisco, CA",
		joinDate: "Joined March 2021",
		bio: "Passionate software engineer with expertise in React, Node.js, and cloud architecture. I enjoy solving complex problems and building scalable applications.",
		skills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL", "Docker"],
		avatarUrl: "/placeholder.svg?height=400&width=400",
	};

	return (
		<section className="container mx-auto py-12">
			<Card className="max-w-2xl mx-auto">
				<CardHeader className="pb-0">
					<div className="flex flex-col items-center space-y-4">
						<Avatar className="h-24 w-24">
							<AvatarImage src={profile.avatarUrl} alt={profile.name} />
							<AvatarFallback>
								{profile.name
									.split(" ")
									.map((n) => n[0])
									.join("")}
							</AvatarFallback>
						</Avatar>
						<div className="text-center space-y-1">
							<h2 className="text-2xl font-bold">{profile.name}</h2>
							<span className="font-bold flex items-center justify-center gap-2">
								<FaCoins /> 1000
							</span>
							<p className="text-muted-foreground flex items-center justify-center gap-1">
								<Briefcase className="h-4 w-4" />
								{profile.role}
							</p>
							<div className="flex items-center justify-center text-sm text-muted-foreground gap-4">
								<span className="flex items-center gap-1">
									<Mail className="h-4 w-4" />
									{profile.email}
								</span>
								<span className="flex items-center gap-1">
									<MapPin className="h-4 w-4" />
									{profile.location}
								</span>
							</div>
							<p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
								<Calendar className="h-4 w-4" />
								{profile.joinDate}
							</p>
						</div>
					</div>
				</CardHeader>
				<CardContent className="pt-6 space-y-6">
					<div>
						<h3 className="text-lg font-semibold mb-2">About</h3>
						<p className="text-muted-foreground">{profile.bio}</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-2">Skills</h3>
						<div className="flex flex-wrap gap-2">
							{profile.skills.map((skill, index) => (
								<Badge key={index} variant="secondary">
									{skill}
								</Badge>
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
