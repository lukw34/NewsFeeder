import React from 'react';
import {FlatList, View} from 'react-native';
import PropTypes from 'prop-types';

import ListRow from '../ListRow';
import styles from './styles';
import ModalInfo from '../Modal/Info';

class List extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object),
        styles: PropTypes.shape({}),
        onRefresh: PropTypes.func.isRequired,
        navigateTo: PropTypes.func.isRequired
    };

    static defaultProps = {
        items: [],
        styles: {}
    };

    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSubmitPress = this.onSubmitPress.bind(this);
    }

    state = {
        isModalVisible: false,
        info: {}
    };

    onSubmitPress(config) {
        this.props.navigateTo('News', config);
        this.closeModal();
    }

    openModal(info) {
        this.setState({
            isModalVisible: true,
            info
        });
    }

    closeModal() {
        this.setState({
            isModalVisible: false,
            info: {}
        });
    }

    render() {
        const {items = [], styles: externalStyle, onRefresh} = this.props,
            {isModalVisible, info} = this.state;
        return (
            <View style={[externalStyle, styles.listContainer]}>
                <FlatList
                    refreshing={false}
                    onRefresh={onRefresh}
                    data={items.map((value, index) => ({value, index, key: `key-${index}`}))}
                    renderItem={({item}) => (<ListRow
                        handlePress={this.openModal}
                        {...item.value}
                    />)}
                />
                <ModalInfo
                    modalActive={isModalVisible}
                    info={info}
                    onRequestClose={this.closeModal}
                    onSubmitPress={this.onSubmitPress}
                />
            </View>
        );
    }
}

export default List;