import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

const propTypes = {
  style: PropTypes.object,
  videoLength: PropTypes.string,
};

const defaultProps = {
  style: {},
  videoLength: null,
};

const VideoLength = ({ style, videoLength }) => (
  <View>
    <Text style={style}>{videoLength}</Text>
  </View>
);

VideoLength.propTypes = propTypes;
VideoLength.defaultProps = defaultProps;

export default VideoLength;
