import React from 'react'
import classes from "./Header.module.css"

export const Header = () => {
  return (
    <>
    <nav className={classes.nav}>
    <div className={classes.logo}>NFL Pick Em</div>
    <ul className={classes.navbar}>
     <button className={classes.btnListItem}><li>Picks</li></button>
      <button className={classes.btnListItem}><li>Trends</li></button>
      <button className={classes.btnLogin}>Login</button>
    </ul>
    </nav>
    </>
  )
}
