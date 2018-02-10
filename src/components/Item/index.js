import { h, Component } from 'preact';

export default class Item extends Component {
	render() {
		return (
			<div>
				{this.props.item.title}
			</div>
		);
	}
}
