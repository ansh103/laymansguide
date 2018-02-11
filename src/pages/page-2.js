import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div style={{color:'Black'}}>
    <h1>The Guide will go live soon.</h1>
    <p>Till then, keep coding :)</p>

    <Link to="/"><div style={{color:'Black'}}>Go back to the homepage</div>
    </Link>
  </div>
)

export default SecondPage
