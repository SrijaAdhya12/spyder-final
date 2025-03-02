import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { MapPin, ShuffleIcon as Swap, Award, User } from "lucide-react";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<Link to="/" className="mr-6 flex items-center space-x-2">
					<Swap className="h-6 w-6" />
					<span className="font-bold">Skill Swap Network</span>
				</Link>
				<nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
					<Link
						to="/skill-map"
						className="transition-colors hover:text-primary"
					>
						<MapPin className="mr-2 inline-block h-4 w-4" />
						Skill Map
					</Link>
					<Link
						to="/quick-swap"
						className="transition-colors hover:text-primary"
					>
						<Swap className="mr-2 inline-block h-4 w-4" />
						Quick Swap
					</Link>
					<Link
						to="/leaderboard"
						className="transition-colors hover:text-primary"
					>
						<Award className="mr-2 inline-block h-4 w-4" />
						Leaderboard
					</Link>
				</nav>
				<div className="flex items-center space-x-4">
					<Link to="/profile">
						<Button variant="ghost" size="sm">
							<User className="mr-2 h-4 w-4" />
							Profile
						</Button>
					</Link>
					<a href="#skill-map">
						<Button size="sm">Start Swapping</Button>
					</a>
				</div>
			</div>
		</header>
	);
}
