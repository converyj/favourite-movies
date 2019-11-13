import React from "react";

import MovieCard from "./MovieCard";

// holds the display of favourite movies users like
const Dashboard = ({ movies, usersByMovie, users }) => {
	// Loop through movies object array keys 1,2 etc. and pass the users, current user in the usersByMovie array and the current movie
	const movieCards = Object.keys(movies).map((id) => (
		<MovieCard
			key={id}
			users={users}
			usersWhoLikesMovie={usersByMovie[id]}
			movieInfo={movies[id]}
		/>
	));
	return (
		<div>
			<h1>{movieCards}</h1>
		</div>
	);
};

export default Dashboard;
