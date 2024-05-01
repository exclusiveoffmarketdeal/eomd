import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300;1,400;1,500;1,700;1,800&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/img/favicon.ico' />
      </Head>
      <body style={{ fontFamily: 'Noto Sans' }}>
        <Main />
        <NextScript />
        {process.env.NEXT_PUBLIC_ENABLE_CHATBOT_SCRIPT === 'yes' ? (
          <style jsx>{`
            .embeddedServiceHelpButton .helpButton .uiButton {
              overflow: initial;
              background-color: #005290;
              font-family: 'Arial', sans-serif;
              font-size: 1.25em;
            }
            .embeddedServiceLiveAgentStateChatRichItem {
              background: none !important;
            }
            .embeddedServiceHelpButton .helpButton .uiButton:focus {
              outline: 1px solid #005290;
            }
            .helpButtonLabel {
              overflow: initial !important;
            }
            .message {
              overflow: initial;
              background-color: inherit;
              border-style: none;
              color: inherit;
              padding: 0;
              margin: 0;
            }
          `}</style>
        ) : (
          ''
        )}
        <Script
          src={process.env.NEXT_PUBLIC_ENABLE_CHATBOT_SCRIPT === 'yes' ? '/chatbot.js' : ''}
          strategy='beforeInteractive'
        />
      </body>
    </Html>
  )
}
