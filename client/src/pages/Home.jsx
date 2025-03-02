import { Footer, Navbar } from "@/components";
import { CTA, Features, Hero, SkillMap } from "@/sections";
const Home = () => {
	return (
		<main className="mx-auto container">
			<Navbar />
			<Hero />
			<Features />
			<SkillMap />
			<CTA />
			<Footer />
		</main>
	);
};

export default Home;
