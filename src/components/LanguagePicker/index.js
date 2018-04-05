import { h } from 'preact';
import I18n from 'i18nline';
import style from './style';

const locales = () => [
	{ k: 'en', v: I18n.t('English') },
	{	k: 'de', v: I18n.t('German') },
	{	k: 'nl', v: I18n.t('Dutch') }
];

const LanguagePicker = props => (
	<select class={style.languagePicker} onChange={changeListener(props)}>
		{locales().sort(alphabetic).map(x => (
			<option selected={x.k === (props.locale || props.defaultLocale)} value={x.k}>{x.v}</option>
		))}
	</select>
);

const changeListener = (props) => (e) => {
	const lang = e.target.options[e.target.selectedIndex].value;
	props.changeLocale && props.changeLocale(lang, e);
	e.preventDefault();
};

const alphabetic = (x,y) => (x.v < y.v ? -1 : x.v > y.v ? 1 : 0);

export default LanguagePicker;
