import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, View } from 'react-native';
import VideoOptions from './VideoOptions';

const propTypes = {
  videoInfo: PropTypes.object,
  videoTitle: PropTypes.string,
  channelName: PropTypes.string,
  channelAvatarImage: PropTypes.string,
};

const defaultProps = {
  videoInfo: {},
  videoTitle: null,
  channelName: null,
  channelAvatarImage: null,
};

const VideoInfo = ({ videoTitle, videoInfo, channelName, channelAvatarImage }) => (
  <View
    style={{
      paddingHorizontal: 16,
      paddingTop: 15,
      paddingBottom: 15,
      flexDirection: 'row',
      marginTop: 5,
    }}
  >
    <View style={{ marginHorizontal: 10 }}>
      <Image style={{ width: 40, height: 40, borderRadius: 20, margin: 0 }} source={{ uri: channelAvatarImage }} />
    </View>
    <View style={{ paddingHorizontal: 15, paddingBottom: 15 }}>
      <Text style={{ fontWeight: '400', fontSize: 14, color: '#fff', flex: 1, flexWrap: 'wrap' }}>{videoTitle}</Text>
      <Text style={{ fontSize: 12, marginTop: 6, color: '#4d4d4d' }}>
        {channelName} · {videoInfo.description.views} · {videoInfo.description.uploadDate}
      </Text>
    </View>
    <View>
      <VideoOptions />
    </View>
  </View>
);

VideoInfo.propTypes = propTypes;
VideoInfo.defaultProps = defaultProps;

export default VideoInfo;
