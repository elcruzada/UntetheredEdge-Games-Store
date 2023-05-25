import { getAllGamesThunk, getSingleGameThunk } from "./games"

const GET_ALLCOMMENTS = "comments/GET_ALLCOMMENTS"
const POST_COMMENT = "comments/POST_COMMENT"
const DELETE_COMMENT = "comments/DELETE_COMMENT"
const UPDATE_COMMENT = "comments/UPDATE_COMMENT"

export const getAllCommentsAction = (allComments) => ({
    type: GET_ALLCOMMENTS,
    allComments
})

export const postCommentAction = (userInput) => ({
    type: POST_COMMENT,
    userInput
})

export const deleteCommentAction = (input) => ({
    type: DELETE_COMMENT,
    input
})

export const updateCommentAction = (update) => ({
    type: UPDATE_COMMENT,
    update
})

export const getAllCommentsThunk = (gameId) => async (dispatch) => {
    const res = await fetch(`/api/games/${gameId}/comments`)

    if (res.ok) {
        const allGameComments = await res.json()
        dispatch(getAllCommentsAction(allGameComments))
        return allGameComments
    }
}

export const postCommentThunk = (id, commentInput) => async (dispatch) => {
    // const { game_id, comment } = commentInput
    // console.log('COMMMENTIIINPUT', commentInput)
    const res = await fetch(`/api/games/${id}/comments`, {
        method: 'POST',
        body: commentInput
    })

    if (res.ok) {
        const commentPost = await res.json()
        dispatch(postCommentAction(commentInput))
        return commentPost
    }
}

export const updateCommentThunk = (id, commentInput) => async (dispatch) => {
    const res = await fetch(`/api/games/${id}/comments`, {
        method: 'PUT',
        body: commentInput
    })

    if (res.ok) {
        console.log('REEES', res)
        const commentUpdates = await res.json()
        dispatch(updateCommentAction(commentUpdates))
        return commentUpdates
    }
}

export const deleteCommentThunk = (commentId) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
        body: commentId
    })

    if (res.ok) {
        // const deletedComment = await res.json()
        // dispatch(getSingleGameThunk(gameId))
        dispatch(deleteCommentAction(commentId))
        // return deletedComment
    }
}

const initialState = {
    game: {},
    user: {}
}

export default function commentsReducer(state = initialState, action) {
    let newCommentsState;
    const normalizerFunction = (actionData, nestedObjInState) => {
        actionData.forEach(comment => {
            nestedObjInState[comment.id] = comment
        })
    }
	switch (action.type) {
        case GET_ALLCOMMENTS:
            // console.log('newcommentsstate', newCommentsState)
            // console.log('AAACTION', action)
            newCommentsState = { ...state, game: {...state.game} }
            normalizerFunction((action.allComments.comments), (newCommentsState.game))
            return newCommentsState
        case POST_COMMENT:
            newCommentsState = { ...state, game: { ...state.game }, user: { ...state.user } }
            newCommentsState.game[action.userInput.id] = action.userInput
            newCommentsState.user[action.userInput.id] = action.userInput
            return newCommentsState
        case UPDATE_COMMENT:
            newCommentsState = { ...state, game: { ...state.game }, user: { ...state.user } }
            newCommentsState.game[action.update.id] = action.update
            newCommentsState.user[action.update.id] = action.update
            return newCommentsState
        case DELETE_COMMENT:
            newCommentsState = { ...state, game: { ...state.game }, user: { ...state.user } }
            delete newCommentsState.game[action.input]
            delete newCommentsState.user[action.input]
            return newCommentsState
		default:
			return state;
	}
}
