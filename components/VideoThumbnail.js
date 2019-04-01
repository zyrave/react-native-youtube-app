import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import VideoLength from './VideoLength';

const propTypes = {
  thumbnailUrl: PropTypes.string,
  videoLength: PropTypes.string,
};

const defaultProps = {
  thumbnailUrl: null,
  videoLength: null,
};

const VideoThumbnail = ({ thumbnailUrl, videoLength }) => (
  <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5, marginRight: 5 }}>
    <View style={{ flex: 1, width: 100, height: 200, backgroundColor: '#fff' }}>
      <ImageBackground style={{ flex: 1, width: null, height: 200 }} source={{ uri: thumbnailUrl }} />
      <VideoLength
        style={{
          position: 'absolute',
          right: 20,
          top: -35,
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 3,
          paddingHorizontal: 7,
          textAlign: 'right',
          overflow: 'hidden',
        }}
        videoLength={videoLength}
      />
    </View>
  </View>
);

VideoThumbnail.propTypes = propTypes;
VideoThumbnail.defaultProps = defaultProps;

export default VideoThumbnail;
