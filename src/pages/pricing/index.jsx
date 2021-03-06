import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Brands,
  RequestForm,
  Chat
} from "../../components"
import "./index.scss"

const RequestPage = ({
  data: {
    hubspotForm: { formFieldGroups, guid },
  },
}) => {
  return (
    <Layout isTransparentHeader={false}>
      <div className="flex items-center bg-even">
        <div className="px-5 max-w-6xl mx-auto w-full mt-20">
          <RequestForm
            formFieldGroups={formFieldGroups}
            id={guid}
            data={{
              title: "Request Price Quote",
              jsx: `<p>Explore Pricing options</p>`,
              buttonText: "Request Demo",
            }}
          />
        </div>
      </div>
      <Brands />
      <Chat />
    </Layout>
  )
}
export const query = graphql`
  query {
    hubspotForm(id: { eq: "cd4e4702-8537-4150-b840-13a6c172e74e" }) {
      guid
      portalId
      name
      submitText
      redirect
      formFieldGroups {
        fields {
          label
          name
          required
          fieldType
          placeholder
          options {
            label
            value
          }
        }
      }
    }
  }
`

export default RequestPage