import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useSwipeable } from "react-swipeable"

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

const StyledCarousel = styled.div``

const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(calc(-80% - 20px))"
    if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))"
    return "translateX(0%)"
  }};
`

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
`

const CarouselItem = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${props => props.order};
`
