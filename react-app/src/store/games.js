const GET_ALLGAMES = "games/GET_ALLGAMES"
const GET_SINGLEGAME = "games/GET_SINGLEGAME"
const CREATE_GAME = "games/CREATE_GAME"
const UPDATE_GAME = "games/UPDATE_GAME"

const getAllGamesAction = (games) => ({
	type: GET_ALLGAMES,
    games
});

const getSingleGameAction = (game) => ({
    type: GET_SINGLEGAME,
    game
})

const createGameAction = (gameInputs) => ({
    type: CREATE_GAME,
    gameInputs
})

const updateGameAction = (updateInputs) => ({
    type: UPDATE_GAME,
    updateInputs
})

export const getAllGamesThunk = () => async (dispatch) => {
    const res = await fetch('/api/games')
    if (res.ok) {
        const gamesData = await res.json()
        dispatch(getAllGamesAction(gamesData))
    }
}

export const getSingleGameThunk = (gameId) => async (dispatch) => {
    const res = await fetch(`/api/games/${gameId}`)
    if (res.ok) {
        const singleGameData = await res.json()
        dispatch(getSingleGameAction(singleGameData))
    }
}

export const createGameThunk = (gameInputs) => async (dispatch) => {
    const res = await fetch('/api/games/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameInputs)
    })

    if (res.ok) {
        const gameData = await res.json()
        dispatch(createGameAction(gameData))
        return gameData
    }
}

export const updateGameThunk = (gameId, gameInputs) => async (dispatch) => {
    const res = await fetch(`/api/games/${gameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameInputs)
    })

    if (res.ok) {
        const updatedGame = await res.json()
        dispatch(updateGameAction(updatedGame))
        return updatedGame
    }
}



const initialState = {
    allGames: {},
    singleGame: {}
}

export default function gamesReducer(state = initialState, action) {
    let newGamesState;
	switch (action.type) {
		case GET_ALLGAMES:
            newGamesState = { ...state, allGames: { ...action.allGames }}
            action.games.games.forEach(game => newState.allGames[game.id] = game)
            return newGamesState
        case GET_SINGLEGAME:
            newGamesState = { ...state, singleGame: action.game}
            return newGamesState
        case CREATE_GAME:
            newGamesState = { ...state,  allGames: {...state.allGames} }
            newGamesState.singleGame[action.gameInputs.id] = action.gameInputs
            return newGamesState

		default:
			return state;
	}
}
