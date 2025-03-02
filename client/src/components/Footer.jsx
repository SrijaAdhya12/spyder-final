import { Link } from "react-router";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
	return (
		<footer className="border-t">
			<div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
				<div className="flex-1 space-y-4">
					<h2 className="font-bold">Skill Swap Network</h2>
					<p className="text-sm text-muted-foreground">
						Connecting skills, empowering communities.
					</p>
				</div>
				<div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
					<div className="space-y-4">
						<h3 className="text-sm font-medium">Platform</h3>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									to="/how-it-works"
									className="text-muted-foreground transition-colors hover:text-primary"
								>
									How It Works
								</Link>
							</li>
							<li>
								<Link
									to="/safety"
									className="text-muted-foreground transition-colors hover:text-primary"
								>
									Safety & Trust
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-sm font-medium">Community</h3>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									to="/events"
									className="text-muted-foreground transition-colors hover:text-primary"
								>
									Events
								</Link>
							</li>
							<li>
								<Link
									to="/blog"
									className="text-muted-foreground transition-colors hover:text-primary"
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-sm font-medium">Connect</h3>
						<div className="flex space-x-4">
							<Link
								href="#"
								className="text-muted-foreground transition-colors hover:text-primary"
							>
								<Facebook className="h-5 w-5" />
								<span className="sr-only">Facebook</span>
							</Link>
							<Link
								to="#"
								className="text-muted-foreground transition-colors hover:text-primary"
							>
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link
								to="#"
								className="text-muted-foreground transition-colors hover:text-primary"
							>
								<Instagram className="h-5 w-5" />
								<span className="sr-only">Instagram</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container border-t py-6">
				<p className="text-center text-sm text-muted-foreground">
					© {new Date().getFullYear()} Skill Swap Network. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
