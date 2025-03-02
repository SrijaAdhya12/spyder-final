import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const dummyRequests = [
	{
		id: 1,
		title: "Need help moving this weekend",
		skill: "Moving",
		urgency: "High",
	},
	{
		id: 2,
		title: "Looking for a quick Spanish lesson",
		skill: "Language",
		urgency: "Medium",
	},
	{
		id: 3,
		title: "Car trouble, need mechanic ASAP",
		skill: "Auto Repair",
		urgency: "High",
	},
	{
		id: 4,
		title: "Want to learn basic Photoshop",
		skill: "Graphic Design",
		urgency: "Low",
	},
];

const QuickSwap = () =>{
	return (
		<section className="container py-24 md:py-32">
			<h2 className="text-3xl font-bold mb-8">Quick Swap</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{dummyRequests.map((request) => (
					<div key={request.id} className="border rounded-lg p-6 bg-background">
						<div className="flex items-center justify-between mb-4">
							<h3 className="font-semibold">{request.title}</h3>
							<span
								className={`px-2 py-1 rounded-full text-xs ${
									request.urgency === "High"
										? "bg-red-100 text-red-800"
										: request.urgency === "Medium"
										? "bg-yellow-100 text-yellow-800"
										: "bg-green-100 text-green-800"
								}`}
							>
								{request.urgency}
							</span>
						</div>
						<p className="text-sm text-muted-foreground mb-4">
							Skill needed: {request.skill}
						</p>
						<div className="flex justify-between items-center">
							<Button size="sm" variant="outline">
								<Zap className="h-4 w-4 mr-2" />
								Offer Help
							</Button>
							<Button size="sm">Contact Requester</Button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default QuickSwap