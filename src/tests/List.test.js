import { h, Component } from 'preact';
import List from '../components/List';

describe('<List />', () => {
	it('should a list of articles', () => {
		const items = [
			{ title: 'post 1', time_ago: '1 minute ago' },
			{ title: 'post 2', time_ago: '2 minutes ago' },
			{ title: 'post 3', time_ago: '3 minutes ago' },
		];
		expect(<List items={items} />).toMatchSnapshot();
	});
});

