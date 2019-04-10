import React from 'react';
import {connect} from 'react-redux';
import HistoryImage from './HistoryImage';
import {deleteImage} from '../actions'

class History extends React.Component {

    renderImages = () => {
        const { images } = this.props;
        return images.map(image => <HistoryImage key={image.id} src={image.src} updated={image.updated} />);
    }

    handleClickDelete = id => () => {
        const { deleteImage } = this.props;
        deleteImage(id);
    }

    render() {
        const { images } = this.props;
        return(
            <div className="history shadow">
                {images && <div className="history__images">{ images.map(image => <HistoryImage key={image.id} src={image.src} updated={image.updated} title={image.title} handleClickDelete={this.handleClickDelete(image.id)} />) } </div> }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        images: state.images
    }
}

const mapToDispatch = {
    deleteImage
}

export default connect(mapStateToProps, mapToDispatch)(History);