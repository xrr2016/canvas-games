import React from 'react'

const style = {
	width: '200px',
	border: 'none',
	outline: 'none',
	cursor: 'pointer',
	backgroundColor: '#00a497',
	boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)'
}

export default () => {
	return (
		<button style={style}>
			<svg width="32" height="32" viewBox="0 0 1024 1024">
				<path
					fill="#fff"
					d="M256 485.504V320h512v128l192-192L768 64v128H195.2a67.2 67.2 0 0 0-67.2 67.2v354.304l82.752-82.752z"
				/>
				<path
					fill="#fff"
					d="M768 538.496V704H256V576L64 768l192 192V832h572.8a67.2 67.2 0 0 0 67.2-67.2V410.496l-82.752 82.752z"
				/>
			</svg>
		</button>
	)
}
