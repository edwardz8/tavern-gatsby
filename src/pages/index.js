import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import ParticleComponent from '../components/ParticleComponent'

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Tavern Dev House"

    return (
      <div
      style={{
        width: "100%",
        height: "100vh",
        margin: "0",
        padding: "0"
      }}
    >
      <ParticleComponent />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          marginBottom: "20px"
        }}
      >
        <div style={{textAlign: "center", marginTop: "20rem"}}>
        <h1 style={{color: "white", fontSize: "64px"}}>Tavern</h1>
        <p style={{color: "white", fontSize: "24px", margin: "0 auto", width: "50%"}}>
          A Software Development Production House focused in React Native
        </p>
        </div>
      </div>
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `agency`, `gatsby`, `react`]}
        />
        <div style={{display: "flex", justifyContent: "space-around"}}>
        <div>
        <h1>
          Philosophy{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Tavern builds a wide range of production apps built with the latest and most reliable technologies to get your business ahead of the curve.</p>
        <p>
          We work with you every step of the way, from UI Design, branding, and complete, dynamic, customer-friendly TVos, Smart Watch and Mobile Apps to deployment and continued maintenance.  
        </p>
        <p>Get in touch to learn more!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
        </div>
        {/* <img style={{ margin: 0, width: "300px", height: "100%" }} src="./apple-watch.png" alt="Gatsby Scene" /> */}
        </div>


      </Layout>
      </div>
    )
  }
}

export default IndexPage
