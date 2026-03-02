import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import AppContext from '../../context/AppContext'

import {
  VideoItem,
  Title,
  VideoDetailsContainer,
  InteractionButtonsContainer,
  InteractionButton,
  InteractionButtonText,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelTextContainer,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  VideoPlayer,
  LikedButton,
  DisLikeButton,
} from './styledComponents'

const VideoItemDetailsCard = props => {
  const {
    VideoItemCardDetails,
    isLiked,
    updateIsLiked,
    updateDisLike,
    isDisLiked,
  } = props

  const {
    videoUrl,
    title,
    viewCount,
    publishedAt,
    channelName,
    channelProfileImageUrl,
    subscriberCount,
    description,
    id,
  } = VideoItemCardDetails

  const toggleIsLiked = () => updateIsLiked()
  const toggleIsDisLiked = () => updateDisLike()

  return (
    <AppContext.Consumer>
      {value => {
        const {addVideoToList, savedVideoList, isDarkTheme} = value

        const onSaveVideo = () => addVideoToList({...VideoItemCardDetails})
        const isSaved = savedVideoList.some(each => each.id === id)

        return (
          <VideoItem isDarkTheme={isDarkTheme}>
            <VideoPlayer>
              <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            </VideoPlayer>

            <Title as="p">{title}</Title>

            <p>{viewCount} views</p>
            <p>{publishedAt}</p>

            <VideoDetailsContainer>
              <InteractionButtonsContainer>
                <LikedButton
                  type="button"
                  onClick={toggleIsLiked}
                  isLiked={isLiked}
                >
                  <AiOutlineLike size={20} />
                  <InteractionButtonText
                    color={isLiked ? '#2563eb' : '#64748b'}
                  >
                    Like
                  </InteractionButtonText>
                </LikedButton>

                <DisLikeButton
                  type="button"
                  onClick={toggleIsDisLiked}
                  isDisLiked={isDisLiked}
                >
                  <AiOutlineDislike size={20} />
                  <InteractionButtonText
                    color={isDisLiked ? '#2563eb' : '#64748b'}
                  >
                    Dislike
                  </InteractionButtonText>
                </DisLikeButton>

                <InteractionButton type="button" onClick={onSaveVideo}>
                  <BiListPlus size={20} />
                  <InteractionButtonText>
                    {isSaved ? 'Saved' : 'Save'}
                  </InteractionButtonText>
                </InteractionButton>
              </InteractionButtonsContainer>
            </VideoDetailsContainer>

            <hr />

            <ChannelDetailsContainer>
              <ChannelLogo src={channelProfileImageUrl} alt="channel logo" />

              <ChannelTextContainer>
                <ChannelName isDarkTheme={isDarkTheme}>
                  {channelName}
                </ChannelName>

                <ChannelSubscribers isDarkTheme={isDarkTheme}>
                  {subscriberCount} subscribers
                </ChannelSubscribers>
              </ChannelTextContainer>
            </ChannelDetailsContainer>

            <ChannelDescription isDarkTheme={isDarkTheme}>
              {description}
            </ChannelDescription>
          </VideoItem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoItemDetailsCard
