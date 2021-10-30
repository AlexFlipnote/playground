import React from "react"
import App from "next/app"
import PropTypes from "prop-types"

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <style global jsx>{"html, body { margin: 0 auto; }"}</style>
        <Component {...pageProps} />
      </>
    )
  }
}

CustomApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
