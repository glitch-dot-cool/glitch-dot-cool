import React from "react"
import PropTypes from "prop-types"

const profileTemplate = ({ pageContext: profile }) => {
  console.log(profile)
  return <div>yo i'm a profile haha sick</div>
}

profileTemplate.propTypes = {
  context: PropTypes.object,
}

export default profileTemplate
