
import { useState } from "react";
import { useForm } from "react-hook-form";

function Profile() {
	const [skills, setSkills] = useState([""]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		// Here you would typically send the data to your backend
	};

	const addSkill = () => {
		setSkills([...skills, ""]);
	};

	return (
		<section className="container mx-auto py-12">
			<h2 className="text-3xl font-bold mb-8">Your Profile</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
				<div className="mb-4">
					<label htmlFor="name" className="block mb-2">
						Name
					</label>
					<input
						type="text"
						id="name"
						{...register("name", { required: "Name is required" })}
						className="w-full p-2 border rounded"
					/>
					{errors.name && (
						<p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
					)}
				</div>

				<div className="mb-4">
					<label htmlFor="email" className="block mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address",
							},
						})}
						className="w-full p-2 border rounded"
					/>
					{errors.email && (
						<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
					)}
				</div>

				<div className="mb-4">
					<label className="block mb-2">Skills</label>
					{skills.map((skill, index) => (
						<div key={index} className="mb-2">
							<input
								type="text"
								{...register(`skills.${index}`, {
									required: "Skill is required",
								})}
								className="w-full p-2 border rounded"
							/>
							{errors.skills && errors.skills[index] && (
								<p className="text-red-500 text-sm mt-1">
									{errors.skills[index].message}
								</p>
							)}
						</div>
					))}
					<button
						type="button"
						onClick={addSkill}
						className="text-blue-500 mt-2"
					>
						+ Add another skill
					</button>
				</div>

				<div className="mb-4">
					<label htmlFor="bio" className="block mb-2">
						Bio
					</label>
					<textarea
						id="bio"
						{...register("bio", { required: "Bio is required" })}
						className="w-full p-2 border rounded"
						rows="4"
					></textarea>
					{errors.bio && (
						<p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
					)}
				</div>

				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
				>
					Save Profile
				</button>
			</form>
		</section>
	);
}

export default Profile;
