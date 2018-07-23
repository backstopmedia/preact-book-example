import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import I18n from 'i18nline/lib/i18n';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Preact HNPWA</h1>
				<nav>
					<Link translate="yes" activeClassName={style.active} href="/">Top</Link>
					<Link translate="yes" activeClassName={style.active} href="/new">New</Link>
					<Link translate="yes" activeClassName={style.active} href="/best">Best</Link>
				</nav>
				{this.props.children}
			</header>
		);
	}
}
