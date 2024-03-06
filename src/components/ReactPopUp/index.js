import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  RulesBtn,
  CloseButton,
  RulesImage,
  RulesImageContainer,
} from './styledComponents'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <RulesBtn type="button" className="trigger-button">
          RULES
        </RulesBtn>
      }
    >
      {close => (
        <>
          <CloseButton
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <RiCloseLine size="28px" />
          </CloseButton>

          <RulesImageContainer>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesImageContainer>
        </>
      )}
    </Popup>
  </div>
)
export default ReactPopUp
