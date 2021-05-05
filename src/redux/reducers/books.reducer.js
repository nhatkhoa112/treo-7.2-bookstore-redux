import * as types from '../constants/books.constants';

const initialState = {
    books: [],
    loading: false,
    readingList: [],
    selectedBook: null,
};

const booksReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_BOOKS_REQUEST:
            return { ...state, loading: true };
        case types.GET_BOOKS_SUCCESS:
            return { ...state, books: payload, loading: false };
        case types.GET_BOOKS_FAILURE:
            return { ...state, loading: false };
        case types.GET_BOOK_DETAIL_REQUEST:
            return { ...state, loading: true };
        case types.GET_BOOK_DETAIL_SUCCESS:
            return { ...state, selectedBook: payload, loading: false };
        case types.GET_BOOK_DETAIL_FAILURE:
            return { ...state, loading: false };
        case types.POST_BOOK_TO_FAV_REQUEST:
            return { ...state, loading: true };
        case types.POST_BOOK_TO_FAV_SUCCESS:
            state.readingList.push(payload)
            return { ...state, readingList: state.readingList, loading: false };
        case types.POST_BOOK_TO_FAV_FAILURE:
            return { ...state, loading: false };
        case types.GET_BOOKS_FROM_FAV_REQUEST:
            return { ...state, loading: true };
        case types.GET_BOOKS_FROM_FAV_SUCCESS:
            return { ...state, readingList: payload, loading: false };
        case types.GET_BOOKS_FROM_FAV_FAILURE:
            return { ...state, loading: false };
        case types.REMOVE_BOOKS_FROM_FAV_REQUEST:
            return { ...state, loading: true };
        case types.REMOVE_BOOKS_FROM_FAV_SUCCESS:
            return { ...state, loading: false };
        case types.REMOVE_BOOKS_FROM_FAV_FAILURE:
            return { ...state, loading: false };
    default:
        return state;
        }
    };

export default booksReducer;