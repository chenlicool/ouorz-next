import ContentLoader from 'react-content-loader'

export default function CardSkeleton() {
  return (
    <div className="w-full p-10 shadow-sm bg-white rounded-md border mb-6 text-center">
      {/* @ts-ignore */}
      <ContentLoader
        speed={1}
        width={100}
        style={{ width: '100%' }}
        height={100}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="5" ry="5" width="31%" height="100" />
        <rect x="34%" y="0" rx="5" ry="5" width="95%" height="30" />
        <rect x="34%" y="41" rx="2" ry="2" width="60%" height="15" />
        <rect x="34%" y="63" rx="2" ry="2" width="50%" height="15" />
        <rect x="34%" y="85" rx="2" ry="2" width="55%" height="15" />
      </ContentLoader>
    </div>
  )
}