import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import BlogList from "../components/Blog/BlogList";
import matter from "gray-matter";

export default function Blog(props) {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Thats the Blog. {props.description}
              </h2>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>
        <section>
            <BlogList allBlogs={props.allBlogs} />
        </section>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
    const siteConfig = await import(`../content/config.json`)
    //get posts & context from folder
    const posts = (context => {
        const keys = context.keys()
        const values = keys.map(context)

        const data = keys.map((key, index) => {
            // Create slug from filename
            const slug = key
                .replace(/^.*[\\\/]/, '')
                .split('.')
                .slice(0, -1)
                .join('.')
            const value = values[index]
            // Parse yaml metadata & markdownbody in document
            const document = matter(value.default)
            return {
                frontmatter: document.data,
                markdownBody: document.content,
                slug,
            }
        })
        return data
    })(require.context('../content', true, /\.md$/))

    return {
        props: {
            allBlogs: posts,
            title: siteConfig.default.title,
            description: siteConfig.default.description,
        },
    }
}