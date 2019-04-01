import React, { Component } from 'react';
import { View } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MenuItems } from '../data/mockup';

class VideoOptions extends Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View>
        <Menu
          ref={this.setMenuRef}
          button={<Icon name="more-vert" size={25} color="#3e3e3e" onPress={this.showMenu} />}
        >
          {MenuItems.map((data, i) => (
            <MenuItem
              onPress={this.hideMenu}
              style={{ backgroundColor: '#121212' }}
              textStyle={{ color: '#fff' }}
              underlayColor="#121212"
                key={i} // eslint-disable-line
            >
              {data}
            </MenuItem>
          ))}
        </Menu>
      </View>
    );
  }
}

export default VideoOptions;
