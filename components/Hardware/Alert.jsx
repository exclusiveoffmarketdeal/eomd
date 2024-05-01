import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const Alert = ({ on, text, textColor, bgColor, rounded = 'rounded-md' }) => {
  return (
    <>
      {on ? (
        <>
          <h4
            className={`w-full text-center ${rounded} px-4 py-2`}
            style={{ color: `${textColor}`, backgroundColor: `${bgColor}` }}
          >
            <ReactMarkdown>{text}</ReactMarkdown>
          </h4>
        </>
      ) : null}
    </>
  )
}

export default Alert
