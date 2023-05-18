const GET_ALLGAMES = "games/GET_ALLGAMES"

const getAllGamesAction = (games) => ({
	type: GET_ALLGAMES,
    games
});

export const getAllGamesThunk = () => async (dispatch) => {
    const res = await fetch('/api/games')
    if (res.ok) {
        const gamesData = await res.json()
        dispatch(getAllGamesAction(gamesData))
    }
}

const initialState = { allGames: {}, singleGame: {} }

export default function gamesReducer(state = initialState, action) {
    let newState;
	switch (action.type) {
		case GET_ALLGAMES:
            console.log(newState)
            newState = { ...state, allGames: { ...action.allGames }}
            action.games.games.forEach(game => newState.allGames[game.id] = game)
            return newState
		default:
			return state;
	}
}
