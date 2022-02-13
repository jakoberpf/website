/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import BlogList from "../components/Blog/BlogList";

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
            <BlogList />
        </section>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
    const configData = await import(`../content/config.json`)
    return {
        props: {
            title: configData.title,
            description: configData.description,
        },
    }
}

// export async function getStaticPaths() {
//     //get all .md files in the posts dir
//     const blogs = glob.sync('posts/**/*.md')
//
//     //remove path and extension to leave filename only
//     const blogSlugs = blogs.map(file =>
//         file
//             .split('/')[1]
//             .replace(/ /g, '-')
//             .slice(0, -3)
//             .trim()
//     )
//
//     // create paths with `slug` param
//     const paths = blogSlugs.map(slug => `/blog/${slug}`)
//
//     return {
//         paths,
//         fallback: false,
//     }
// }