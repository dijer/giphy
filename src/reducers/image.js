import { UPLOAD_IMAGE, SUCCESS, FAIL, START } from '../actiontypes';

export default (state = {loading: false, loaded: false}, action) => {
	switch (action.type) {
		case UPLOAD_IMAGE + START:
            return {...state, loading: true, loaded: false};
        case UPLOAD_IMAGE + SUCCESS:
            const image = action.response.data.fixed_height_downsampled_url;
            return {...state, loading: false, loaded: true, image};
        case UPLOAD_IMAGE + FAIL:
            return {...state, loading: false, loaded: false};
        default:
            return state;
	}
};