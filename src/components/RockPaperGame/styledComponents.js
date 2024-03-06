import styled from 'styled-components'

export const AppBgContainer = styled.div`
  height: 100vh;
  padding: 10px;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 20px;
`

export const ScoresBgContainer = styled.div`
  width: 40%;
  border: 1px solid white;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`

export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreCard = styled.div`
  height: 80px;
  width: 80px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  text-align: center;
  flex-direction: column;
  font-family: 'Bree Serif';
  color: #223a5f;
  font-weight: bold;
`

export const Name = styled.h1`
  margin: 2px;
  font-size: 22px;
  color: white;
  font-family: 'Bree Serif';
  width: 20px;
`

export const Score = styled.p`
  color: #223a5f;
  font-weight: bold;
  margin: 3px;
  font-family: 'Roboto';
`

export const ButtonContainer = styled.ul`
  list-style: none;
  margin-top: 10%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const GameImage = styled.img`
  width: 120px;
`

export const ImageResultsContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 420px;
  justify-content: space-between;
  margin-top: 10%;

  @media (max-width: 768px) {
    min-width: 280px;
  }
`

export const ImageTagContainer = styled.div`
  text-align: center;
`

export const PlayAgainButton = styled.button`
  padding: 10px 18px;
  border-radius: 6px;
  background-color: white;
  font-family: 'Bree Serif';
  border: none;
  cursor: pointer;
`

export const WinLoseText = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: white;
`

export const ReactPopContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`
