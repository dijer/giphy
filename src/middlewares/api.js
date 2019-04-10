import {START, SUCCESS, FAIL} from '../actiontypes';

export default store => next => action => {
    const { apiURL, type, ...rest } = action;
    if (!apiURL) return next(action);

    next({
        ...rest, type: type + START
    });

    //fetch('https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA')
    fetch(apiURL)
        .then(response => response.json())
        .then(response => next({ ...rest, type: type + SUCCESS, response }))
        .catch(error => next({ ...rest, type: type + FAIL, error }));

}