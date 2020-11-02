import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HeroImage from "./../../images/header-placeholder.png"
import "./header.scss"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLandingHero {
        edges {
          node {
            title
            description {
              description
            }
            heroButtons {
              text
              borderColor
              bg
            }
          }
        }
      }
    }
  `)

  const componentData = data.allContentfulLandingHero.edges[0].node

  return (
    <div className="header relative" style={{ minHeight: "600px" }}>
      <div className="container px-5 m-auto pt-24 lg:pt-40">
        <div className="text-center max-w-4xl m-auto content">
          <h1 className="lg:text-6xl text-3xl font-bold text-white pt-5 leading-tight">
            {componentData.title}
          </h1>

          <p className="mt-8 xl:text-1xl lg:text-xl text-lg text-menu max-w-xl mx-auto">
            {componentData.description.description}
          </p>
          <br />
          <div className="mt-6">
            {componentData.heroButtons.map(v => (
              <button
                className={`${
                  v.bg === "#00AEEF" ? "blue-button" : "transparent-button"
                } w-full lg:w-40 m-2 text-white font-semibold py-3 px-4 border`}
              >
                {v.text}
              </button>
            ))}
            <img
              src={HeroImage}
              className="m-auto h-auto heroimage absolute right-0 left-0 bottom-0"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
