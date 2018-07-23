import { h, Component } from 'preact';
import I18n from 'i18nline';
import style from './style';

const locales = () => [
	{ k: 'en', v: I18n.t('English') },
	{	k: 'de', v: I18n.t('German') },
	{	k: 'nl', v: I18n.t('Dutch') }
];

const alphabetic = (x,y) => (x.v < y.v ? -1 : x.v > y.v ? 1 : 0);

export default class LanguagePicker extends Component {
	changeListener = (e) => {
		const lang = e.target.options[e.target.selectedIndex].value;
		this.props.changeLocale && this.props.changeLocale(lang, e);
		e.preventDefault();
	}

	render (props) {
		return (
			<select class={style.languagePicker} onChange={this.changeListener}>
				{locales().sort(alphabetic).map(x => (
					<option selected={x.k === (props.locale || props.defaultLocale)} value={x.k}>{x.v}</option>
				))}
			</select>
		);
	}
}
