import { useState, useEffect } from 'react';

export const useWeglot = (api_key: string, defaultLanguage: string = 'en') => {
  const [language, setLanguage] = useState<string>(defaultLanguage);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.weglot.com/weglot.min.js';
    script.async = true;
    document.body.appendChild(script);

    const x = setInterval(() => {
      // @ts-ignore
      Weglot.initialize({ api_key });

      //@ts-ignore
      if (Weglot.initialized) {
        //@ts-ignore
        Weglot.switchTo(language);
        clearInterval(x);
      }
    }, 500);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // @ts-ignore
    if (window.Weglot) {
      // @ts-ignore
      if (window.Weglot.initialized) {
        // @ts-ignore
        window.Weglot.switchTo(lang);
      }
    }
  }, [language]);

  return [language, setLanguage] as const;
};
