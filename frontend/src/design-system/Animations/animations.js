import { keyframes, css } from "styled-components"
import { lightTheme } from "../theme"

const chromaticAbberationAnimation = keyframes`
    0% {
      text-shadow: 1px 0px 1px ${lightTheme.colors.valid}, -1px 0px 1px ${lightTheme.colors.invalid};
    }

    100% {
      text-shadow: -1px 0px 2px ${lightTheme.colors.valid}, 1px 0px 2px ${lightTheme.colors.invalid};
    }
`

const chromaticAbberation = css`
  animation: ${chromaticAbberationAnimation} 3s linear alternate infinite;
`

const flicker = keyframes`
    0% { opacity: 1; }
    3% { opacity: 0; }
    8% { opacity: .1; }
    14% { opacity: .4; }
    21% { opacity: 0; }
    26% { opacity: .9; }
    29% { opacity: .2; }
    35% { opacity: 1; }
    39% { opacity: 0; }
    43% { opacity: .4; }
    46% { opacity: .9; }
    50% { opacity: 1; }
    52% { opacity: .3; }
    58% { opacity: 1; }
    61% { opacity: 0; }
    63% { opacity: .3; }
    66% { opacity: .6; }
    70% { opacity: .9; }
    72% { opacity: 1; }
    76% { opacity: .2; }
    79% { opacity: 0; }
    82% { opacity: .1; }
    86% { opacity: .5; }
    89% { opacity: .3; }
    91% { opacity: 1; }
    97% { opacity: 0; }
    100% { opacity: .5; }
`
const shifter = keyframes`
    0% { transform: translateX( 5px); }
    7% { transform: translateX( 5px); }
    8% { transform: translateX( 1px); }
    20% { transform: translateX( 1px); }
    21% { transform: translateX( -9px); }
    28% { transform: translateX( -9px); }
    29% { transform: translateX( 1px); }
    38% { transform: translateX( 1px); }
    39% { transform: translateX( 0px); }
    45% { transform: translateX( 0px); }
    46% { transform: translateX( 7px); }
    51% { transform: translateX( 7px); }
    52% { transform: translateX( 3px); }
    60% { transform: translateX( 3px); }
    61% { transform: translateX( -12px); }
    65% { transform: translateX( -12px); }
    66% { transform: translateX( 2px); }
    71% { transform: translateX( 2px); }
    72% { transform: translateX( -8px); }
    78% { transform: translateX( -8px); }
    79% { transform: translateX( 3px); }
    85% { transform: translateX( 3px); }
    86% { transform: translateX( -14px); }
    90% { transform: translateX( -14px); }
    91% { transform: translateX( 7px); }
    99% { transform: translateX( 7px); }
    100% { transform: translateX( -13px); }
`
export { shifter, flicker, chromaticAbberation, chromaticAbberationAnimation }
