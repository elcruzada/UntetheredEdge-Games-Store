const GET_ALLNEWS = "news/GET_ALLNEWS"
const GET_SINGLENEWS = "news/GET_SINGLENEWS"
const CREATE_NEWS = "news/CREATE_NEWS"
const UPDATE_NEWS = "news/UPDATE_NEWS"
const DELETE_NEWS = "news/DELETE_NEWS"

export const getAllNewsAction = (news) => ({
	type: GET_ALLNEWS,
    news
});

export const getSingleNewsAction = (news) => ({
    type: GET_SINGLENEWS,
    news
})

export const createNewsAction = (userInputs) => ({
    type: CREATE_NEWS,
    userInputs
})

export const updateNewsAction = (updateInputs) => ({
    type: UPDATE_NEWS,
    updateInputs
})

export const deleteNewsAction = (news) => ({
    type: DELETE_NEWS,
    news
})

export const getAllNewsThunk = () => async (dispatch) => {
    const res = await fetch('/api/news')
    if (res.ok) {
        const newsData = await res.json()
        dispatch(getAllNewsAction(newsData))
        return newsData
    }
}

export const getSingleNewsThunk = (newsId) => async (dispatch) => {
    const res = await fetch(`/api/news/${newsId}`)
    if (res.ok) {
        const singleNewsData = await res.json()
        dispatch(getSingleNewsAction(singleNewsData))
        return singleNewsData
    }
}

export const createNewsThunk = (newsInputs) => async (dispatch) => {
    const res = await fetch('/api/news/new', {
        method: 'POST',
        body: newsInputs
    })

    if (res.ok) {
        const newsData = await res.json()
        dispatch(createNewsAction(newsData))
        return newsData
    }
}

export const updateNewsThunk = (newsId, newsInputs) => async (dispatch) => {
    const res = await fetch(`/api/news/${newsId}`, {
        method: 'PUT',
        body: newsInputs
    })

    if (res.ok) {
        const updatedNews = await res.json()
        dispatch(updateNewsAction(updatedNews))
        return updatedNews
    }
}

export const deleteNewsThunk = (newsId) => async (dispatch) => {
    const res = await fetch(`/api/games/${newsId}`, {
        method: 'DELETE',
        body: newsId
    })

    if (res.ok) {
        dispatch(deleteNewsThunk(newsId))
    }
}

const initialState = {
    allNews: {},
    singleNews: {}
}

export default function newsReducer(state = initialState, action) {
    let newNewsState;
	switch (action.type) {
		case GET_ALLNEWS:
            newNewsState = { ...state, allNews: { ...action.allNews }}
            action.news.news.forEach(article => newNewsState.allNews[article.id] = article)
            return newNewsState
        case GET_SINGLENEWS:
            newNewsState = { ...state, singleNews: action.news}
            return newNewsState
        case CREATE_NEWS:
            newNewsState = { ...state,  allNews: {...state.allNews} }
            newNewsState.singleNews[action.userInputs.id] = action.userInputs
            return newNewsState
        case DELETE_NEWS:
            newNewsState = { ...state, allNews: {...state.allNews} }
            delete newNewsState.allNews[action.news]
            return newNewsState
		default:
			return state;
	}
}
