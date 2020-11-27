import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const RecencyIndicator = ({ recency, lastPosted }) => {
  const [isVisible, setIsVisible] = useState(false)

  const showTooltip = () => setIsVisible(true)

  const hideTooltip = () => setIsVisible(false)

  return (
    <Icon recency={recency} onMouseOver={showTooltip} onMouseOut={hideTooltip}>
      <ToolTip
        isVisible={isVisible}
      >{`last posted on: ${lastPosted.toUTCString()}`}</ToolTip>
    </Icon>
  )
}

RecencyIndicator.propTypes = {}

export default RecencyIndicator

const Icon = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ theme, recency }) =>
    theme.colors.recencyIndicator[recency]};
`

const ToolTip = styled.span`
  position: absolute;
  left: -285px;
  min-width: 275px;
  z-index: 1000;
  display: ${({ isVisible }) => (isVisible ? "inline" : "none")};
  font-size: 10px;
  font-family: "Roboto Mono", monospace;
  color: ${({ theme }) => theme.colors.scale_0};
  background-color: ${({ theme }) => theme.colors.scale_6};
`
