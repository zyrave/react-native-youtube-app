import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import VideoInfo from './VideoInfo';
import VideoThumbnail from './VideoThumbnail';

const propTypes = {
  videoInfo: PropTypes.object,
  channelInfo: PropTypes.object,
};

const defaultProps = {
  videoInfo: {},
  channelInfo: {},
};

const YouTubeVideo = ({ videoInfo, channelInfo }) => (
  <View>
    <VideoThumbnail thumbnailUrl={videoInfo.VideoThumbnailUrl} videoLength={videoInfo.videoLength} />
    <VideoInfo
      videoTitle={videoInfo.title}
      videoInfo={videoInfo}
      channelName={channelInfo.channelName}
      channelAvatarImage={channelInfo.channelAvatarImage}
    />
  </View>
);

YouTubeVideo.propTypes = propTypes;
YouTubeVideo.defaultProps = defaultProps;

export default YouTubeVideo;
