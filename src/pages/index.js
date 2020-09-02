import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import '../components/style.css';

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Doa App"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Profile"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0, borderRadius: '10px' }} src="./berdoa.jpg" alt="Gatsby Scene" />
        <h1 style={{ fontFamily: 'montserrat' }}>Doa Keseharian</h1>
        <p style={{ fontFamily: 'montserrat' }}>
        Halo temen - temen 👋
        </p>
        <p style={{ fontFamily: 'montserrat' }}>Dengan adanya aplikasi ini semoga mempermudah temen - temen untuk mencari referensi doa sehari - hari.</p>

        <Link to="/blog/" style={{ fontFamily: 'montserrat' }}>
          <Button marginTop="35px">Lihat Semua Doa</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
