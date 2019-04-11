import { UPLOAD_IMAGE, SUCCESS, DELETE_IMAGE } from '../actiontypes';
import uuidv4 from 'uuid/v4';

export default (state = [], action) => {
	switch (action.type) {
        case DELETE_IMAGE: {
            const { id } = action.payload;
            return state.filter(image => image.id !== id);
        }
        case UPLOAD_IMAGE + SUCCESS: {
            const { fixed_width_downsampled_url: src, title } = action.response.data;
            const image = {
                src: src,
                updated: new Date(),
                id: uuidv4(),
                title
            }
            return [image, ...state];
        }
        default:
            return state;
	}
};