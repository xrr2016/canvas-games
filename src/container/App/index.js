import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Logo from '../../components/Logo'
import Github from '../../components/Github'
import Color from '../../components/Color'
import ConvertBtn from '../../components/ConvertBtn'
import DevTools from 'mobx-react-devtools'

import './App.scss'

@observer
class App extends Component {
	render() {
		return (
			<main className="app">
				<DevTools />
				<header className="header">
					<Logo text="color converter" />
					<Github />
				</header>
				<section className="input-container">
					<div className="container">
						<Color />
						<input
							className="color-input"
							type="text"
							placeholder="Enter your color"
							autoFocus
							tabIndex="1"
							title="输入你要转换的颜色值"
						/>
						<ConvertBtn />
					</div>
				</section>
				<div className="progress-bar" />
				<section className="container historys">
					<span className="history">#ff8922</span>
					<span className="history">hsl(222, 10, 21)</span>
					<span className="history">hs(222, 111, 00)</span>
					<span className="history">#ff8922</span>
				</section>
				<section className="container results">
					<div className="result">rgb</div>
					<div className="result">hex</div>
					<div className="result">hsl</div>
				</section>
				<section className="container commons">
					<div className="common">black</div>
					<div className="common">silver</div>
					<div className="common">azure</div>
					<div className="common">aliceblue</div>
					<div className="common">cadetblue</div>
					<div className="common">chocolate</div>
					<div className="common">darkgray</div>
					<div className="common">darkseagreen</div>
					<div className="common">darkseagreen</div>
					<div className="common">darkseagreen</div>
					<div className="common">darkseagreen</div>
					<div className="common">darkseagreen</div>
					<div className="common">darkseagreen</div>
					<div className="common">darkseagreen</div>
					<div className="common">darkseagreen</div>
					<div className="common">darkseagreen</div>
					<div className="common">darkseagreen</div>
					<div className="common">deeppink</div>
					<div className="common">deeppink</div>
					<div className="common">deeppink</div>
					<div className="common">deeppink</div>
					<div className="common">deeppink</div>
					<div className="common">deeppink</div>
					<div className="common">deeppink</div>
					<div className="common">deeppink</div>
					<div className="common">deeppink</div>
					<div className="common">deeppink</div>
					<div className="common">deeppink</div>
					<div className="common">deeppink</div>
					<div className="common">dodgerblue</div>
					<div className="common">ivory</div>
					<div className="common">lightsalmon</div>
					<div className="common">mediumspringgreen</div>
					<div className="common">mediumspringgreen</div>
					<div className="common">mediumspringgreen</div>
					<div className="common">mediumspringgreen</div>
					<div className="common">mediumspringgreen</div>
					<div className="common">mediumspringgreen</div>
					<div className="common">mediumspringgreen</div>
					<div className="common">mediumspringgreen</div>
					<div className="common">mediumspringgreen</div>
					<div className="common">salmon</div>
					<div className="common">salmon</div>
					<div className="common">salmon</div>
					<div className="common">salmon</div>
				</section>
			</main>
		)
	}
}

export default App
