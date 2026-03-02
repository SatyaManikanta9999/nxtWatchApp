import {Link} from 'react-router-dom'
import AppContext from '../../context/AppContext'

import {
  VideoCardItem,
  ThumbnailVideoImage,
  ProfileImage,
  Title,
  ChannelName,
  ProfileDetailsContainer,
  ProfileSection,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {VideoItemDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channelName,
    channelProfileImageUrl,
    id,
  } = VideoItemDetails

  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoCardItem>
            <ThumbnailVideoImage src={thumbnailUrl} alt="video thumbnail" />

            <ProfileSection>
              <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
                <ProfileImage src={channelProfileImageUrl} alt="channel logo" />

                <ProfileDetailsContainer>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ChannelName isDarkTheme={isDarkTheme}>
                    {channelName}
                  </ChannelName>

                  {/* MUST be plain <p> */}
                  <p>{viewCount} views</p>

                  {/* MUST be plain <p> */}
                  <p>{publishedAt}</p>

                </ProfileDetailsContainer>
              </Link>
            </ProfileSection>
          </VideoCardItem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default TrendingVideoCard