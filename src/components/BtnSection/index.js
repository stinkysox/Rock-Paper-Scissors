import {GameButton, GameImage} from './styledComponents'

const BtnSection = props => {
  const {details, onGameButtonClick} = props
  const {id, imageUrl, testId} = details
  const onButtonClick = () => {
    onGameButtonClick(id)
    console.log(testId)
  }

  return (
    <li>
      <GameButton type="button" data-testid={testId}>
        <GameImage src={imageUrl} alt={id} onClick={onButtonClick} />
      </GameButton>
    </li>
  )
}

export default BtnSection
