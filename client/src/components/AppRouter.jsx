import { Route, Routes, useLocation } from "react-router";

import { Home, LeaderBoard, Profile, QuickSWap, SkillMap } from "@/pages";

const AppRouter = () => {
	const location = useLocation();
	return (
		<Routes location={location}>
			<Route path="/" element={<Home />} />
			<Route path="/leaderboard" element={<LeaderBoard />} />
			<Route path="/quick-swap" element={<QuickSWap />} />
			<Route path="/skill-map" element={<SkillMap />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
};

export default AppRouter;
