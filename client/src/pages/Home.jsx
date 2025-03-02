import { Footer, Navbar } from "@/components";
import { Button } from "@/components/ui/button";
import { CTA, Features, Hero, SkillMap } from "@/sections";
const Home = () => {
  return (
		<div>
		  <Navbar />
		  <Hero />
		  <Features />
		  <SkillMap/>
		  <CTA />
		  <Footer/>
		</div>
	);
};

export default Home;
