import { useWeglot } from 'react-weglot';

export const Weglot = () => {
    const [lang, setLang] = useWeglot('wg_00000000000000000000000000000000', 'en');
    return (
        <div>
            <p>Current language: {lang}</p>
            <button onClick={() => setLang('en')}>EN</button>
            <button onClick={() => setLang('fr')}>FR</button>
            <button onClick={() => setLang('es')}>ES</button>
        </div>
    );
};
