import React from 'react'
import PropTypes from 'prop-types'

import PageLayout from '../components/PageLayout'
import Header from '../components/Header'
import Map from '../components/Map'

export default function Home({ siteName, theme }) {
  return (
    <PageLayout theme={theme}>
      <Header siteName={siteName} />
      <Map />
    </PageLayout>
  )
}

Home.propTypes = {
  siteName: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
