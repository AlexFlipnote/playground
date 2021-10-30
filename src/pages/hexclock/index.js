import React from "react"
import { Helmet } from "react-helmet"

import style from "./style.module.scss"


export default class HexClock extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    function pad(n) { return (`0${n}`).slice(-2) }

    function getTime(hex) {
      const now = new Date()

      let hour = pad(now.getHours())
      let minute = pad(now.getMinutes())
      let second = pad(now.getSeconds())

      if (hex == "hex") {
        return hour.toString() + minute.toString() + second.toString()
      } else {
        return `${hour}:${minute}:${second}`
      }
    }

    const bg = document.getElementById("bg")
    const time = document.getElementById("time")
    const timetext = document.getElementById("timetext")

    function timeInHex() {
      const gettime = `#${getTime("hex")}` // Lazy HEX maker

      bg.style.backgroundColor = gettime // Website background
      time.innerHTML = gettime // Upper time
      timetext.innerHTML = getTime() // Bottom text

      try {
        document.querySelector("meta[name=theme-color]").setAttribute("content", gettime) // Change theme for phones
      } catch (err) { null }

      document.title = `HEX Clock - ${gettime}` // Website title

      setTimeout(timeInHex, 100) // Repeat every 0.1 seconds
    }

    timeInHex()
  }

  render() {
    return (
      <>
        <Helmet>
          <meta name="theme-color" content="#14bae4"/>
        </Helmet>
        <section id="bg" className={style.bg} style={{ backgroundColor: "#000" }}>
          <div className={style.timeContainer}>
            <h1 id="timetext" className={style.time}>00:00:00</h1>
            <h1 id="time" className={style.hex}>#000000</h1>
          </div>
          <div className={style.homepage}>
            <p>
              My homepage plugin uses this as an option with the backgrounds of choice,
              <a href="https://github.com/AlexFlipnote/homepage" target="_blank" rel="noreferrer">try it out</a> for free.
            </p>
          </div>
        </section>
      </>
    )
  }
}
