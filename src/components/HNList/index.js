import { h, Component } from 'preact';
import hn from '../../hn';
import List from '../List';

export default class HNList extends Component {
	state = {
		items: [],
	};

	load = page => {
		hn(`${this.props.endpoint}?page=${page}`)
			.then(items => {
				this.setState({ items });
			})
			.catch(console.error);
	};

	componentWillReceiveProps(nextProps) {
		if (this.props.page !== nextProps.page) {
			this.load(nextProps.page);
		}
	}

	componentDidMount() {
		this.load(this.props.page);
	}

	render() {
		return (
			this.state.items.length > 0 && <List items={this.state.items} />
		);
	}
}
