import { MapPin, Shield, Zap, Award } from "lucide-react";

const features = [
	{
		name: "Skill Map",
		description:
			"Discover nearby users with the skills you need or who are interested in your expertise.",
		icon: MapPin,
	},
	{
		name: "Verified Skill Badges",
		description:
			"Earn and display badges that showcase your verified skills and build trust in the community.",
		icon: Shield,
	},
	{
		name: "Quick Swap",
		description:
			"Find urgent help or offer your skills for time-sensitive needs in your local area.",
		icon: Zap,
	},
	{
		name: "Skill Coins",
		description:
			"Earn and spend skill coins to access a wide range of services within the network.",
		icon: Award,
	},
];

const Features = () =>{
	return (
		<section className="container space-y-16 py-24 md:py-32">
			<div className="mx-auto max-w-[58rem] text-center">
				<h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
					How Skill Swap Works
				</h2>
				<p className="mt-4 text-muted-foreground sm:text-lg">
					Discover the features that make Skill Swap Network the best place to
					share and learn new skills.
				</p>
			</div>
			<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
				{features.map((feature) => (
					<div
						key={feature.name}
						className="relative overflow-hidden rounded-lg border bg-background p-8"
					>
						<div className="flex items-center gap-4">
							<feature.icon className="h-8 w-8" />
							<h3 className="font-bold">{feature.name}</h3>
						</div>
						<p className="mt-2 text-muted-foreground">{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Features