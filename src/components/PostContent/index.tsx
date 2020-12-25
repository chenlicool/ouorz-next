import ReactHtmlParser from 'react-html-parser'

export default function PostContent({ content }: { content: string }) {
  return (
    <div className="prose lg:prose-xl tracking-wide">
      {ReactHtmlParser(content)}
    </div>
  )
}