import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const NotFoundPage = () => (
  <Layout>
    <section className='hero is-fullheight is-dark'>
      <div className='hero-head'>
        <Navbar />
      </div>

      <div
        className='hero-body has-text-centered'
        style={{ paddingTop: 0, alignItems: 'flex-start' }}
      >
        <div className='container content'>
          <h1 className='title' style={{ fontSize: 100, letterSpacing: 15 }}>
            404
          </h1>
          <p className='title'>
            404
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
