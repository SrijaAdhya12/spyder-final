import { Route, Routes, useLocation } from "react-router";

import { Home } from "@/pages";

const AppRouter = () => {
	const location = useLocation();
	return (
		<Routes location={location}>
			<Route
				path="/"
				element={
					<div className="relative min-h-screen">
						{/* Background gradients */}
						<div className="pointer-events-none fixed inset-0">
							<div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
							<div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
							<div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
						</div>

						<div className="relative z-10">
							<Home/>
						</div>
					</div>
				}
			/>
		</Routes>
	);
};

export default AppRouter;
