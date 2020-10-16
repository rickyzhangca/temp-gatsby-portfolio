import React from 'react'
import { graphql, withPrefix, useStaticQuery } from 'gatsby'

const Footer = React.memo(() => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          social {
            github {
              url
            }
          }
        }
      }
    }
  `)
  const { social } = data.site.siteMetadata

  return (
    <footer className='site-footer'>
      <div className='site-description'>
        <a
          className='has-text-info'
          href={social.github.url}
          target='_blank'
          rel='nofollow noreferrer noopener'
        >
          Github
        </a>
        {'   |   '}
        <a className='has-text-info' href={withPrefix('/')}>
          Portfolio
        </a>
      </div>
      <div className='copyright'>
        ©2019 Ricky Zhang        
      </div>
    </footer>
  )
})

export default Footer