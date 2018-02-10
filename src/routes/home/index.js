import { h, Component } from 'preact';
import style from './style';
import HNList from '../../components/HNList';

export default class Home extends Component {
	state = {
		page: 1,
	};

	render() {
		return (
			<div class={style.home}>
				<h1>Top</h1>
				<HNList page={this.state.page} endpoint="/news" />
			</div>
		);
	}
}
