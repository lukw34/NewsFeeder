import React from 'react';
import {FlatList, View, Text} from 'react-native';
import PropTypes from 'prop-types';

import ListRow from '../ListRow';
import styles from './styles';
import ModalInfo from '../Modal/Info';

class List extends React.Component {
    state = {
        isModalVisible: false,
        info: {}
    };

    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSubmitPress = this.onSubmitPress.bind(this);
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
            modalProps: {}
        });
    }

    onSubmitPress(config) {
        this.props.navigateTo('News', config);
        this.closeModal();
    }

    render() {
        const {items = []} = this.props,
            {isModalVisible, info} = this.state;
        return (
            <View style={styles.listContainer}>
                <FlatList
                    data={items.map((value, index) => ({value, index, key: `key-${index}`}))}
                    renderItem={({item}) => <ListRow onPress={this.openModal} item={item.value}/>}
                />
                <ModalInfo
                    modalActive={isModalVisible}
                    info={info}
                    onRequestClose={this.closeModal}
                    onSubmitPress={this.onSubmitPress}
                />
            </View>
        )
    }
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};

export default List