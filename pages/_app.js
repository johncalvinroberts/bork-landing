import React from 'react'
import styled, {injectGlobal} from 'styled-components'
import { connect } from 'refunk'
injectGlobal`
body {
  background: #f5f5f5;
  min-height: 100vh;
  margin: 0px;
  overflow-x: hidden;
}
 * {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #333333;
 }

.flex-container{
  display: flex;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
}
.flex--inner{
  max-width: 740px;
  width:100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.bork-box {
  flex: 0 0 250px;
  padding-left: 25px;
}

h1, h2, h3, p {
  letter-spacing: 3px;
  line-height: 1.3;
}

h2 {
  font-weight: 400;
}
`

const Root = styled('div')([], {
  textDecoration: 'none'
})

const App = connect(props => {
  const {
    render
  } = props

  return (
    <React.Fragment>
      <Root>
        {render()}
      </Root>
    </React.Fragment>)
})

App.defaultProps = {
  styles: false
}

export default App
