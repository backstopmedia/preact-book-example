import { h, Component } from 'preact';
import Item from '../Item';

export default class List extends Component {
	render() {
		return (
			<ol>
				{this.props.items.map((item, idx) => <Item index={idx + 1} item={item} />)}
			</ol>
		);
	}
}
