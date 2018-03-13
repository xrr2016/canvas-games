import React from 'react'

const style = {
	fontSize: '1.3em',
	textTransform: 'uppercase'
}

export default ({ text }) => {
	return <h2 style={style}>{text}</h2>
}
