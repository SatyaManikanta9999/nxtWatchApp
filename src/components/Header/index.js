import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon, FaSun} from 'react-icons/fa'
import AppContext from '../../context/AppContext'

import {
  HeaderBackgroundContainer,
  HeaderContent,
  WebSiteLogo,
  HeaderMenu,
  CustomButton,
  ProfileImage,
  PopupContentContainer,
  PopupButtonContainer,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const renderHeaderMenu = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const logoUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const themeIcon = isDarkTheme ? (
          <FaSun size={20} color="#ffffff" />
        ) : (
          <FaMoon size={20} />
        )

        return (
          <>
            <Link to="/">
              <WebSiteLogo src={logoUrl} alt="website logo" />
            </Link>

            <HeaderMenu>
              <CustomButton
                type="button"
                onClick={toggleTheme}
                data-testid="theme"
              >
                {themeIcon}
              </CustomButton>

              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Popup modal trigger={<button type="button">Logout</button>}>
                {close => (
                  <PopupContentContainer>
                    <p>Are you sure, you want to logout</p>

                    <PopupButtonContainer>
                      <button type="button" onClick={close}>
                        Cancel
                      </button>

                      <button type="button" onClick={onClickLogout}>
                        Confirm
                      </button>
                    </PopupButtonContainer>
                  </PopupContentContainer>
                )}
              </Popup>
            </HeaderMenu>
          </>
        )
      }}
    </AppContext.Consumer>
  )

  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <HeaderBackgroundContainer isDarkTheme={isDarkTheme}>
            <HeaderContent>{renderHeaderMenu()}</HeaderContent>
          </HeaderBackgroundContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
