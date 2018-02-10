import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import HNList from '../../components/HNList';

export default class Home extends Component {
	render() {
		const page = parseInt(this.props.page, 10) || 1;
		const next = `/${page + 1}`;
		return (
			<div class={style.home}>
				<h1>Top</h1>
				<HNList page={page} endpoint="/news" />
				<Link href={next}>More</Link>
			</div>
		);
	}
}
