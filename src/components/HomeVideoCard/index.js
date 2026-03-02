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

const HomeVideoCard = props => {
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
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <ThumbnailVideoImage src={thumbnailUrl} alt="video thumbnail" />

              <ProfileSection>
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
              </ProfileSection>
            </Link>
          </VideoCardItem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default HomeVideoCard