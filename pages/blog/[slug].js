import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import glob from "glob";
// import Layout from '../../components/Layout'

export default function BlogTemplate(props) {
    // Render data from `getStaticProps`
    return (
        // <Layout siteTitle={props.siteTitle}>
        //     <h1>{props.frontmatter.title}</h1>
            <article className="prose">
                <div>
                    <ReactMarkdown children={props.markdownBody} />
                </div>
            </article>
        // </Layout>
    )
}

export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params
    const content = await import(`../../content/${slug}.md`)
    const config = await import(`../../content/config.json`)
    const data = matter(content.default)

    return {
        props: {
            siteTitle: config.title,
            frontmatter: data.data,
            markdownBody: data.content,
        },
    }
}

export async function getStaticPaths() {
    //get all .md files in the posts dir
    const blogs = glob.sync('content/**/*.md')

    //remove path and extension to leave filename only
    const blogSlugs = blogs.map(file =>
        file
            .split('/')[1]
            .replace(/ /g, '-')
            .slice(0, -3)
            .trim()
    )

    // create paths with `slug` param
    const paths = blogSlugs.map(slug => `/blog/${slug}`)

    return {
        paths,
        fallback: false,
    }
}

// import React from 'react'
// import matter from 'gray-matter'
// import ReactMarkdown from 'react-markdown/react-markdown.min';

// function PostTemplate({ content, data }) {
//     // This holds the data between `---` from the .md file
//     const frontmatter = data
//
//     return (
//         <>
//             <h1>{frontmatter.title}</h1>
//             <ReactMarkdown source={content} />
//         </>
//     )
// }
//
// PostTemplate.getInitialProps = async (context) => {
//     const { slug } = context.query
//
//     // Import our .md file using the `slug` from the URL
//     const content = await import(`../../content/${slug}.md`)
//
//     // Parse .md data through `matter`
//     const data = matter(content.default)
//
//     // Pass data to our component props
//     return { ...data }
//
//     return { slug }
// }
//
// export default PostTemplate