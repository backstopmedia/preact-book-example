import { h, Component } from 'preact';
import style from './style';

export default class Item extends Component {
	render() {
		const { comments_count, points, domain, title, time_ago, user, url } = this.props.item;
		return (
			<div class={style.root}>
				<div class={style.number}>{this.props.index}</div>
				<div>
					<h3 class={style.title}>{title}</h3>
					<div class={style.meta}>
						<span>{points} points by {user} {time_ago}</span>
						<span class={style.comment}>
							{comments_count === 0 && 'No comments'}
							{comments_count === 1 && '1 comment'}
							{comments_count > 1 && `${comments_count} comments`}
						</span>
					</div>
				</div>
			</div>
		);
	}
}
