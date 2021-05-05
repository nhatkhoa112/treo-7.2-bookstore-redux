import { toast } from "react-toastify";

import * as types from "../constants/books.constants";

import api from "../../apiService";

const getBooks = (pageNum, limit, query) => async (dispatch) => {
    dispatch({ type: types.GET_BOOKS_REQUEST, payload: null });
    try {
        let url = `${process.env.REACT_APP_BACKEND_API}/books?_page=${pageNum}&_limit=${limit}`;
        if (query) url += `&q=${query}`;
        const data = await api.get(url);
        dispatch({ type: types.GET_BOOKS_SUCCESS, payload: data.data });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.GET_BOOKS_FAILURE, payload: error });
    }
};

const getBookDetail = (bookId) => async (dispatch) => {
    dispatch({ type: types.GET_BOOK_DETAIL_REQUEST, payload: null });
    try {
        const data = await api.get(`/books/${bookId}`);
        dispatch({ type: types.GET_BOOK_DETAIL_SUCCESS, payload: data.data });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.GET_BOOK_DETAIL_FAILURE, payload: error });
    }
};


const postBookToFav = (addingBook) => async (dispatch) => {
    dispatch({ type: types.POST_BOOK_TO_FAV_REQUEST, payload: null });
    try {
        await api.post(`/favorites`, addingBook);
        toast.success("The book has been added to the reading list!");
        dispatch({ type: types.POST_BOOK_TO_FAV_SUCCESS, payload: addingBook });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.POST_BOOK_TO_FAV_FAILURE, payload: error });
    }
};

const getBookFav = () => async (dispatch) => {
    dispatch({ type: types.GET_BOOKS_FROM_FAV_REQUEST, payload: null });
    try {
        const data = await api.get(`/favorites`);
        // toast.success("The book has been added to the reading list!");
        dispatch({ type: types.GET_BOOKS_FROM_FAV_SUCCESS, payload: data.data });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.GET_BOOKS_FROM_FAV_FAILURE, payload: error });
    }
}

const removeBookFromFav = (removedBookId) => async (dispatch) => {
    dispatch({ type: types.REMOVE_BOOKS_FROM_FAV_REQUEST, payload: null });
    try {
        await api.delete(`/favorites/${removedBookId}`);
        toast.success("The book has been remove to the reading list!");
        dispatch({ type: types.REMOVE_BOOKS_FROM_FAV_SUCCESS, payload: removedBookId });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.REMOVE_BOOKS_FROM_FAV_FAILURE, payload: error });
    }
}

const bookActions = {getBooks, getBookDetail, postBookToFav, getBookFav, removeBookFromFav};
export default bookActions;