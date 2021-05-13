import styled, { css } from 'styled-components'
import { Button } from '@material-ui/core'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ isFocus, logoutUser, setFocus }) => {
  return (
    <StWrapper style={{height: 120 + (isFocus ? 40 : 0)}}>
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={logoutUser}
        >ログアウト</Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setFocus(true)}
        >フォーカス</Button>
      </div>
    </StWrapper>
  )
}

const StWrapper = styled.div`
  position: relative;
  border-radius: .5em;
  box-shadow: 2px 2px 9px -3px rgba(0, 0, 0, 0.4);
  border-radius: .5rem;
  padding: 10px;
  background-color: darkcyan;
`