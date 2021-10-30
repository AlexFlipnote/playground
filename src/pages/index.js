import React from "react"
import { Helmet } from "react-helmet"

import style from "./style.module.scss"


class Paths extends React.Component {
  constructor(props) {
    super(props)
    this.boundFindPages = this.findPages.bind(this)
  }

  findPages() {
    const ctx = require.context("/src/pages", true, /\.js$/)
    return ctx
      .keys()
      .filter(page => !page.startsWith("./_"))
      .filter(page => page != "./index.js")
      .map(page => {
        page = page
          .replace(/(\/index)?\.js$/i, "")
          .replace(/\.(\/)?/i, "/")
        return <a className={style.link} key={page} href={page}>{page}</a>
      })
  }

  render() { return this.boundFindPages() }
}

export default class Index extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>/home/playground/index.md</title>
          <style>{"html, body {background: #181818;}"}</style>
        </Helmet>
        <div className={style.container}>
          <h1 className={style.title}>Directory:</h1>
          <hr></hr>
          <div className={style.paths}>
            <Paths />
          </div>
        </div>
      </>
    )
  }
}
