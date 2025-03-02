import { Route, Routes, useLocation } from "react-router";
import { Home} from "@/pages";

const AppRouter = () => {
	const location = useLocation();
	return (
		<Routes location={location}>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export default AppRouter;
