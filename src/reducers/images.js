import { UPLOAD_IMAGE, SUCCESS, DELETE_IMAGE } from '../actiontypes';

export default (state = [], action) => {
	switch (action.type) {
        case DELETE_IMAGE: {
            const { id } = action.payload;
            return state.filter(image => image.id !== id);
        }
        case UPLOAD_IMAGE + SUCCESS: {
            const { fixed_width_downsampled_url, id, title } = action.response.data;
            const image = {
                src: fixed_width_downsampled_url,
                updated: new Date(),
                id,
                title
            }
            return [...state, image];
        }
        default:
            return state;
	}
};