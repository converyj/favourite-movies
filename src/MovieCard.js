import React from "react";

// display the movie and the people's names who liked that movie
const MovieCard = ({ users, usersWhoLikesMovie, movieInfo }) => {
	return (
		<div>
			<h2>{movieInfo.name}</h2>
			{
				!usersWhoLikesMovie || usersWhoLikesMovie.length === 0 ? <p>
					None of the current users liked this movie.
				</p> :
				<div>
					<h3>Liked By:</h3>
					<ul>
						{usersWhoLikesMovie &&
							usersWhoLikesMovie.map((userId) => {
								return (
									<div>
										<li key={userId}>
											<p>{users[userId].name}</p>
										</li>
									</div>
								);
							})}
					</ul>
				</div>}
		</div>
	);
};

export default MovieCard;
