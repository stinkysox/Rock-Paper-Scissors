import React, {Component} from 'react'
import {
  AppBgContainer,
  ScoresBgContainer,
  NamesContainer,
  ScoreCard,
  Name,
  ButtonContainer,
  GameImage,
  ImageResultsContainer,
  ImageTagContainer,
  PlayAgainButton,
  WinLoseText,
  ReactPopContainer,
  Score,
} from './styledComponents'
import BtnSection from '../BtnSection'
import ReactPopUp from '../ReactPopUp'

class RockPaperScissors extends Component {
  state = {score: 0, status: 'Initial', winner: '', loser: ''}

  getRandomOptions = () => {
    const randomValuesArray = ['ROCK', 'PAPER', 'SCISSORS']
    const randomIndex = Math.floor(Math.random() * randomValuesArray.length)
    console.log(randomIndex)
    const randomValue = randomValuesArray[randomIndex]
    return randomValue
  }

  onReset = () => {
    this.setState({status: 'Initial', winner: '', loser: ''})
  }

  onGameButtonClick = (playerValue, imageUrl) => {
    const opponentValue = this.getRandomOptions()
    console.log(`Opponent: ${opponentValue}`)
    console.log(`Player: ${playerValue}`)

    if (playerValue === opponentValue) {
      this.setState({status: 'Draw'})
    } else if (
      (playerValue === 'PAPER' && opponentValue === 'ROCK') ||
      (playerValue === 'SCISSORS' && opponentValue === 'PAPER') ||
      (playerValue === 'ROCK' && opponentValue === 'SCISSORS')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        status: 'Win',
        winner: playerValue,
        loser: opponentValue,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        winner: opponentValue,
        status: 'Lose',
        loser: playerValue,
      }))
    }
  }

  renderInitialView = () => {
    const {choicesList} = this.props
    return (
      <ButtonContainer>
        {choicesList.map(eachItem => (
          <BtnSection
            key={eachItem.id}
            details={eachItem}
            onGameButtonClick={this.onGameButtonClick}
          />
        ))}
      </ButtonContainer>
    )
  }

  renderWinView = () => {
    const {winner, loser} = this.state

    const getWinnerUrl = () => {
      if (winner === 'ROCK') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="your choice "
          />
        )
      } else if (winner === 'PAPER') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
            alt="your choice "
          />
        )
      }
      return (
        <GameImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          alt="your choice "
        />
      )
    }

    const getLoserUrl = () => {
      if (loser === 'ROCK') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="opponent choice"
          />
        )
      } else if (loser === 'PAPER') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
            alt="opponent choice"
          />
        )
      }
      return (
        <GameImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          alt="opponent choice"
        />
      )
    }

    return (
      <div>
        <ImageResultsContainer>
          <ImageTagContainer>
            <WinLoseText>You</WinLoseText>
            {getWinnerUrl()}
          </ImageTagContainer>
          <ImageTagContainer>
            <WinLoseText>Opponent</WinLoseText>
            {getLoserUrl()}
          </ImageTagContainer>
        </ImageResultsContainer>
        <ImageTagContainer>
          <WinLoseText>YOU WON</WinLoseText>
          <PlayAgainButton
            type="button"
            onClick={this.onReset}
            data-testid="PLAY AGAIN"
          >
            PLAY AGAIN
          </PlayAgainButton>
        </ImageTagContainer>
      </div>
    )
  }

  renderLoserView = () => {
    const {winner, loser} = this.state

    const getWinnerUrl = () => {
      if (winner === 'ROCK') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="opponent choice"
          />
        )
      } else if (winner === 'PAPER') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
            alt="opponent choice"
          />
        )
      }
      return (
        <GameImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          alt="opponent choice"
        />
      )
    }

    const getLoserUrl = () => {
      if (loser === 'ROCK') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="your choice"
          />
        )
      } else if (loser === 'PAPER') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
            alt="your choice"
          />
        )
      }
      return (
        <GameImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          alt="your choice"
        />
      )
    }

    return (
      <div>
        <ImageResultsContainer>
          <ImageTagContainer>
            <WinLoseText>You</WinLoseText>
            {getLoserUrl()}
          </ImageTagContainer>
          <ImageTagContainer>
            <WinLoseText>Opponent</WinLoseText>
            {getWinnerUrl()}
          </ImageTagContainer>
        </ImageResultsContainer>
        <ImageTagContainer>
          <WinLoseText>YOU LOSE</WinLoseText>
          <PlayAgainButton
            type="button"
            onClick={this.onReset}
            data-testid="PLAY AGAIN"
          >
            PLAY AGAIN
          </PlayAgainButton>
        </ImageTagContainer>
      </div>
    )
  }

  renderDrawView = () => {
    const {winner, loser} = this.state

    const getWinnerUrl = () => {
      if (winner === 'ROCK') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="your choice"
          />
        )
      } else if (winner === 'PAPER') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
            alt="your choice"
          />
        )
      }
      return (
        <GameImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          alt="your choice"
        />
      )
    }

    const getLoserUrl = () => {
      if (loser === 'ROCK') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="opponent choice"
          />
        )
      } else if (loser === 'PAPER') {
        return (
          <GameImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
            alt="opponent choice"
          />
        )
      }
      return (
        <GameImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          alt="opponent choice"
        />
      )
    }

    return (
      <div>
        <ImageResultsContainer>
          <ImageTagContainer>
            <WinLoseText>You</WinLoseText>
            {getLoserUrl()}
          </ImageTagContainer>
          <ImageTagContainer>
            <WinLoseText>Opponent</WinLoseText>
            {getWinnerUrl()}
          </ImageTagContainer>
        </ImageResultsContainer>
        <ImageTagContainer>
          <WinLoseText>IT IS DRAW</WinLoseText>
          <PlayAgainButton
            type="button"
            onClick={this.onReset}
            data-testid="PLAY AGAIN"
          >
            PLAY AGAIN
          </PlayAgainButton>
        </ImageTagContainer>
      </div>
    )
  }

  renderView = () => {
    const {status} = this.state
    switch (status) {
      case 'Initial':
        return this.renderInitialView()

      case 'Win':
        return this.renderWinView()

      case 'Lose':
        return this.renderLoserView()

      case 'Draw':
        return this.renderDrawView()

      default:
        return null
    }
  }

  render() {
    const {choicesList} = this.props
    const {score} = this.state
    return (
      <AppBgContainer>
        <ScoresBgContainer>
          <NamesContainer>
            <Name>Rock Paper Scissors</Name>
          </NamesContainer>
          <ScoreCard>
            <Score white>Score</Score>
            <Score white>{score}</Score>
          </ScoreCard>
        </ScoresBgContainer>

        {this.renderView()}
        <ReactPopContainer>
          <ReactPopUp />
        </ReactPopContainer>
      </AppBgContainer>
    )
  }
}

export default RockPaperScissors
