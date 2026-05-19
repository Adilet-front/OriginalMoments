import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const SUPPORTED_LANGUAGES = ['ru', 'en', 'ky']
const LANGUAGE_LABELS = {
  ru: 'RU',
  en: 'EN',
  ky: 'KY',
}

const translations = {
  ru: {
    pageTitle: 'Ади | Приложения и игры',
    languageTitle: 'Язык интерфейса',
    welcome: 'Привет, я Ади',
    subtitle:
      'Создаю приложения и игры. Здесь будут анонсы релизов, обновления и бэкстейдж разработки.',
    updatesTitle: 'Что вы получите',
    updatesSubtitle: 'Коротко о контенте, который будет выходить регулярно.',
    updates: [
      'Анонсы новых приложений и игр',
      'Демки, devlog и процесс разработки',
      'Патчноуты и планы по обновлениям',
    ],
    socialTitle: 'Соцсети для продвижения',
    socialSubtitle: 'Подписывайтесь на каналы, где я буду публиковать все обновления.',
    socialLinks: {
      github: 'GitHub',
      Instagram: 'Instagram',
      x: 'X (Twitter)',
      bluesky: 'Bluesky',
    },
  },
  en: {
    pageTitle: 'Adi | Apps and Games',
    languageTitle: 'Interface language',
    welcome: 'Hi, I am Adi',
    subtitle:
      'I build apps and games. This page will share release announcements, updates, and development behind the scenes.',
    updatesTitle: 'What you will get',
    updatesSubtitle: 'A quick view of the content I will publish regularly.',
    updates: [
      'Announcements of new apps and games',
      'Demos, devlogs, and build process',
      'Patch notes and update plans',
    ],
    socialTitle: 'Social channels for promotion',
    socialSubtitle: 'Follow the channels where I will post all updates.',
    socialLinks: {
      github: 'GitHub',
      Instagram: 'Instagram',
      x: 'X (Twitter)',
      bluesky: 'Bluesky',
    },
  },
  ky: {
    pageTitle: 'Ади | Тиркемелер жана оюндар',
    languageTitle: 'Интерфейс тили',
    welcome: 'Салам, мен Ади',
    subtitle:
      'Мен тиркемелерди жана оюндарды жасайм. Бул жерде релиздер, жаңыртуулар жана иш процесси боюнча посттор болот.',
    updatesTitle: 'Сиз эмне аласыз',
    updatesSubtitle: 'Мен дайыма чыгара турган контенттин кыскача тизмеси.',
    updates: [
      'Жаңы тиркемелер жана оюндар тууралуу жарыялар',
      'Демо, devlog жана иштеп чыгуу процесси',
      'Патчноут жана кийинки жаңыртуу пландары',
    ],
    socialTitle: 'Илгерилетүү үчүн социалдык каналдар',
    socialSubtitle: 'Бардык жаңылыктарды ушул каналдарга чыгарам, катталып коюңуз.',
    socialLinks: {
      github: 'GitHub',
      Instagram: 'Instagram',
      x: 'X (Twitter)',
      bluesky: 'Bluesky',
    },
  },
}

const socialPlatforms = [
  {
    key: 'github',
    icon: 'github-icon',
    href: 'https://github.com/Adilet-front',
  },
  {
    key: 'Instagram',
    icon: 'discord-icon',
    href: 'https://www.instagram.com/english_original_moments/',
  },
  {
    key: 'x',
    icon: 'x-icon',
    href: 'https://x.com/Origina1Moments',
  },
  {
    key: 'bluesky',
    icon: 'bluesky-icon',
    href: 'https://bsky.app/profile/OriginalMoments.bsky.social',
  },
]

function getInitialLanguage() {
  const fallback = 'en'

  if (typeof window === 'undefined') {
    return fallback
  }

  const savedLanguage = window.localStorage.getItem('preferred-language')
  if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage
  }

  const browserLanguage = window.navigator.language.slice(0, 2).toLowerCase()
  return SUPPORTED_LANGUAGES.includes(browserLanguage)
    ? browserLanguage
    : fallback
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const t = translations[language]

  useEffect(() => {
    window.localStorage.setItem('preferred-language', language)
    document.documentElement.lang = language
    document.title = t.pageTitle
  }, [language, t.pageTitle])

  return (
    <>
      <section id="center">
        <div className="language-switcher" role="group" aria-label={t.languageTitle}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang}
              type="button"
              className={`lang-button ${language === lang ? 'active' : ''}`}
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
            >
              {LANGUAGE_LABELS[lang]}
            </button>
          ))}
        </div>

        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>

        <div>
          <h1>{t.welcome}</h1>
          <p>{t.subtitle}</p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>{t.updatesTitle}</h2>
          <p>{t.updatesSubtitle}</p>
          <ul className="feature-list">
            {t.updates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div id="social">
          {/* <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg> */}
          <h2>{t.socialTitle}</h2>
          <p>{t.socialSubtitle}</p>
          <ul>
            {socialPlatforms.map((platform) => (
              <li key={platform.key}>
                <a href={platform.href} target="_blank" rel="noreferrer">
                  {/* <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href={`/icons.svg#${platform.icon}`}></use>
                  </svg> */}
                  {t.socialLinks[platform.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
