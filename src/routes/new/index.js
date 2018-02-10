import { h, Component } from 'preact';
import style from './style';
import HNList from '../../components/HNList';

export default class New extends Component {
	state = {
		page: 1,
	};

	render() {
		return (
			<div class={style.home}>
				<h1>New</h1>
				<HNList page={this.state.page} endpoint="/newest" />
			</div>
		);
	}
}
