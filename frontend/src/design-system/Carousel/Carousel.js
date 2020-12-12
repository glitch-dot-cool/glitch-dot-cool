import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useSwipeable } from "react-swipeable"

import TransportChevron from "./TransportChevron"

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos
}
const NEXT = "NEXT"
const PREV = "PREV"
const initialState = { pos: 0, sliding: false, dir: NEXT }

const Carousel = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const numItems = React.Children.count(children)

  const slide = dir => {
    dispatch({ type: dir, numItems })
    setTimeout(() => {
      dispatch({ type: "stopSliding" })
    }, 50)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    trackMouse: true,
  })

  return (
    <StyledCarousel {...handlers}>
      <TransportChevron type={PREV} onClick={() => slide(PREV)} />
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(children, (child, index) => {
            return (
              <CarouselItem
                key={index}
                order={getOrder({ index, pos: state.pos, numItems })}
              >
                {child}
              </CarouselItem>
            )
          })}
        </CarouselContainer>
      </Wrapper>
      <TransportChevron type={NEXT} onClick={() => slide(NEXT)} />
    </StyledCarousel>
  )
}

Carousel.propTypes = {}

function reducer(state, { type, numItems }) {
  switch (type) {
    case "reset":
      return initialState
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
      }
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      }
    case "stopSliding":
      return { ...state, sliding: false }
    default:
      return state
  }
}

export default Carousel

const StyledCarousel = styled.div`
  display: flex;
  align-items: center;
`

const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform 0.35s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(calc(-100% - 13px))"
    if (props.dir === PREV) return "translateX(calc(2 * (-100% - 13px)))"
    return "translateX(0%)"
  }};
`

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.scale_5};
  display: grid;
  /* padding: 2rem; */
  grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));

  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    grid-template-columns: repeat(1, 100%);
  }
`

const CarouselItem = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  padding: 6.5px;
  margin-right: 6.5px;
  order: ${props => props.order};

  will-change: transform, opacity, box-shadow;
  transform: scale(1) translate(0px, 0px);
  transition: 0.1s ease transform, 0.1s ease opacity, 0.1s ease box-shadow;

  :hover {
    opacity: 0.9;
    transform: scale(1.03) translate(-3px, -3px);
    box-shadow: 9px 9px 0px ${props => props.theme.colors.box_shadow},
      6px 6px 0px ${props => props.theme.colors.box_shadow},
      3px 3px 0px ${props => props.theme.colors.box_shadow};
  }

  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    flex-basis: 95vw;
  }
`
