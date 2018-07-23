import { h, Component } from 'preact';
import { Router } from 'preact-router';
import I18n from '../i18n';
import Header from './header';
import LanguagePicker from './LanguagePicker';
import Home from '../routes/home';
import New from '../routes/new';
import Best from '../routes/best';
import Item from '../routes/item';

if (module.hot) {
	require('preact/debug');
	((typeof window === 'object') && window || global).I18n = I18n;
}

export default class App extends Component {
	localeChanged = (locale) => {
		this.setState({ locale });
	}

	componentDidMount() {
		I18n.on('change', this.localeChanged);
	}

	componentWillUnmount() {
		I18n.removeListener('change', this.localeChanged);
	}

	render() {
		return (
			<div id="app">
				<Header>
					<LanguagePicker {...I18n} />
				</Header>
				<Router>
					<Home path="/:page?" />
					<New path="/new/:page?" />
					<Best path="/best/:page?" />
					<Item path="/item/:id" />
				</Router>
			</div>
		);
	}
}
