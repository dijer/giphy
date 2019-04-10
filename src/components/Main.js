import React from 'react';
import {connect} from 'react-redux';
import {loadImage} from '../actions'

class Main extends React.Component {

    componentDidMount() {
        const {loaded, loading, loadImage} = this.props;
        if (!loaded && !loading) {
            loadImage();
        }
    }

    handleClickUpload = () => {
        const {loadImage} = this.props;
        loadImage();
    }

    render() {
        const { loading, image } = this.props;
        console.log(this.props);
        return(
            <div className="main shadow">
                <div className="main__image"><img src={image} alt="" /></div>
                <button onClick={this.handleClickUpload} className="main__button">{ loading ? 'Грузим...' : 'Загрузить' }</button>
            </div>
            
        )
    }
}

function mapStateToProps (state) {
    return {
        image: state.image.image,
        loading: state.image.loading,
        loaded: state.image.loaded
    }
}

const mapToDispatch = {
    loadImage
}

export default connect(mapStateToProps, mapToDispatch)(Main);