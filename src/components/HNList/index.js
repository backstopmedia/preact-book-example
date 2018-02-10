import { h, Component } from 'preact';
import hn from '../../hn';
import List from '../List';

export default class HNList extends Component {
	state = {
		items: [],
	};

	componentDidMount() {
		hn(`${this.props.endpoint}?page=${this.props.page}`)
			.then(items => {
				this.setState({ items });
			})
			.catch(console.error);
	}

	render() {
		return (
			this.state.items.length > 0 && <List items={this.state.items} />
		);
	}
}
