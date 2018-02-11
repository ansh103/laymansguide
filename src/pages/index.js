import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{color:'Black'}}>
    <h1>Hi people</h1>
    <p>Welcome to Layman&apos;s Guide.</p>
    <p>We are here to create</p>
    <Link to="/page-2/">Go to page 2</Link>
    <img src="https://source.unsplash.com/random/1366x768" alt="" />
    <div style={{color:'LightBlue'}}>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
)

export default IndexPage
