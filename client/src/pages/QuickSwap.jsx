
import { useState } from "react";
import { Zap } from "react-feather";

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

function QuickSwap() {
	const [requests] = useState(dummyRequests);

	return (
		<section className="container mx-auto py-12">
			<h2 className="text-3xl font-bold mb-8">Quick Swap</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{requests.map((request) => (
					<div
						key={request.id}
						className="border rounded-lg p-6 bg-white shadow-md"
					>
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
						<p className="text-sm text-gray-600 mb-4">
							Skill needed: {request.skill}
						</p>
						<div className="flex justify-between items-center">
							<button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition-colors">
								<Zap className="h-4 w-4 inline mr-2" />
								Offer Help
							</button>
							<button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition-colors">
								Contact Requester
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default QuickSwap;
