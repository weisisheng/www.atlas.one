import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./solutions.scss"

export default function Solutions() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSolutions {
        edges {
          node {
            title
            subtitle
            description
            featuredSubtitle
            solutions {
              title
            }
            images {
              fixed {
                srcSet
              }
            }
            icons {
              fluid {
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  const componentData = data.allContentfulSolutions.edges[0].node

  return (
    <div className="py-12 lg:py-24" id="solutions">
      <div className="flex flex-wrap-reverse items-center container m-auto max-w-6xl px-5 ">
        <div className="w-full lg:w-1/2 images-parent mt-8 lg:mt-0 relative">
            <img
              className="absolute image1"
              srcSet={componentData.images[0]?.fixed?.srcSet}
              alt="image1"
            />
            <img
              className="absolute image2"
              srcSet={componentData.images[1]?.fixed?.srcSet}
              alt="image2"
            />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="block font-bold text-blue uppercase tracking-title text-sm">
            {componentData.title}
          </h2>
          <h2 className="block md:text-45xl text-25xl pt-5 sub-title font-bold">
            {componentData.subtitle}
            <h2 className="text-blue inline-block">
              {componentData.featuredSubtitle}
            </h2>
          </h2>
          <span className="block md:text-base text-lg pt-5 font-medium border-b-2 pb-5">
            {componentData.description}
          </span>

          <div className="pt-5">
            {componentData.solutions.map((solution, index) => (
              <div className="flex py-2" key={index}>
                <img
                  style={{ height: "30px", width: "30px" }}
                  srcSet={componentData.icons[index]?.fluid?.srcSet}
                  alt="icon"
                />
                <span
                  style={{letterSpacing: "-0.3px"}}
                  className="font-600 pl-5 text-base"
                >
                  {solution.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
