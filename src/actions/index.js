import {UPLOAD_IMAGE, DELETE_IMAGE} from '../actiontypes';

export function loadImage() {
    return {
        type: UPLOAD_IMAGE,
        apiURL: 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA'
    }
}

export function deleteImage(id) {
    return {
        type: DELETE_IMAGE,
        payload: { id }
    }
}