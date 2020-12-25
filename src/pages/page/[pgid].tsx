import Head from 'next/head'
import Page from '~/components/Page'
import { GetServerSideProps } from 'next'
import { getApi } from '~/utilities/Api'
import SubscriptionBox from '~/components/SubscriptionBox'
import TimeAgo from 'react-timeago'
import CommentBox from '~/components/CommentBox'
import PostContent from '~/components/PostContent'

export default function BlogPage({ page }: { page: any }) {
  return (
    <div>
      <Head>
        <title>{page.title.rendered} - TonyHe</title>
      </Head>
      <Page>
        <article className="shadow-sm border rounded-xl bg-white p-10 lg:p-20">
          <div className="mb-20">
            <h1 className="text-postTitle font-medium tracking-wider leading-snug">
              {page.title.rendered}
            </h1>
            <p className="flex text-xl text-gray-500 space-x-2 mt-2 tracking-wide">
              <span>
                Posted <TimeAgo date={page.date} />
              </span>
              <span>·</span>
              <span>{page.post_metas.views} Views</span>
            </p>
          </div>
          <PostContent content={page.content.rendered}></PostContent>
        </article>
        <div className="mt-5">
          <SubscriptionBox type="lg"></SubscriptionBox>
        </div>
        <CommentBox></CommentBox>
      </Page>
    </div>
  )
}

// Get sticky posts rendered on the server side
export const getServerSideProps: GetServerSideProps = async (context) => {
  const pgid = context.params.pgid

  // Increase page views
  await fetch(
    getApi({
      // @ts-ignore
      visit: pgid,
    })
  )

  // Fetch page data
  const resData = await fetch(
    getApi({
      // @ts-ignore
      page: pgid,
    })
  )
  const pageData = await resData.json()

  return {
    props: {
      page: pageData,
    },
  }
}