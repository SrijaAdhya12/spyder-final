
import { useEffect, useState } from "react";

export default function Confetti() {
	const [particles, setParticles] = useState([]);

	useEffect(() => {
		// Create confetti particles
		const colors = [
			"#ff0000",
			"#00ff00",
			"#0000ff",
			"#ffff00",
			"#ff00ff",
			"#00ffff",
		];
		const newParticles = [];

		for (let i = 0; i < 100; i++) {
			newParticles.push({
				id: i,
				x: Math.random() * 100,
				y: -20 - Math.random() * 100,
				size: 5 + Math.random() * 10,
				color: colors[Math.floor(Math.random() * colors.length)],
				rotation: Math.random() * 360,
				speed: 1 + Math.random() * 3,
			});
		}

		setParticles(newParticles);

		// Animation loop
		let animationId;
		let lastTime = 0;

		const animate = (time) => {
			if (!lastTime) lastTime = time;
			const delta = time - lastTime;
			lastTime = time;

			setParticles(
				(prevParticles) =>
					prevParticles
						.map((particle) => ({
							...particle,
							y: particle.y + particle.speed * (delta / 16),
							rotation: particle.rotation + 1 * (delta / 16),
						}))
						.filter((particle) => particle.y < 120) // Remove particles that have fallen out of view
			);

			if (particles.length > 0) {
				animationId = requestAnimationFrame(animate);
			}
		};

		animationId = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationId);
		};
	}, [particles.length]);

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
			{particles.map((particle) => (
				<div
					key={particle.id}
					className="absolute"
					style={{
						left: `${particle.x}%`,
						top: `${particle.y}%`,
						width: `${particle.size}px`,
						height: `${particle.size}px`,
						backgroundColor: particle.color,
						transform: `rotate(${particle.rotation}deg)`,
						opacity: 0.8,
					}}
				/>
			))}
		</div>
	);
}
