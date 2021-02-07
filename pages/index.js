import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import {postsTitle} from './posts/index'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home() {
  return (
    <Layout home>
      <section>
        <p>
          ようこそ。ここは無趣味人ことCJのウェブサイトです。CJというのはもちろん偽名です。お仕事はとあるソフトウェアのテクニカルサポートですが、それに直接関連することはきっと書かないでしょう。
        </p>
        <p>
          ところで、趣味って何でしょうね。大人になると、無難に会話を持たせるために趣味の話を持ち出す人が多くなりますが、「私の趣味は○○です」と断言してしまうのは、セルフイメージが固定化されそうで好きになれません。それに、他人から完璧には理解されたくないという気持ちは普遍的だと思いますが……いや僕だけかなぁ。
        </p>
        <p>というわけで、お暇な人はどうぞ。</p>
      </section>
      <section className={utilStyles.padding1px}>
        <h2 className={utilStyles.headingLg}>
          <Link href="/posts">
            <a>{postsTitle}</a>
          </Link>
        </h2>
        <p>
          ほとんどは古いサイトから引っ張ってきました。日記としては全然継続できてません。
        </p>
      </section>
      <section className={utilStyles.padding1px}>
        <h2 className={utilStyles.headingMd}>連絡先等</h2>
        <p>SNS等のアカウントです。ほぼ投稿しませんが。</p>
        <ul>
          <li>
            <a href="https://twitter.com/cjthe0ne">Twitter</a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}