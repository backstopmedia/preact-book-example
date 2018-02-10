import { h, Component } from 'preact';
import style from './style';
import HNList from '../../components/HNList';

export default class Best extends Component {
	state = {
		page: 1,
	};

	render() {
		return (
			<div class={style.home}>
				<h1>Best</h1>
				<HNList page={this.state.page} endpoint="/best" />
			</div>
		);
	}
}
