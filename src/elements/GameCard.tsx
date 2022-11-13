import React from 'react'
import classes from './GameCard.module.css'
import Chiefs from "../images/chiefs.png"
import Raiders from "../images/raiders.png"

export const GameCard = () => {
  return (
    <div className={classes.gameCard}>
      <div className={classes.cardContentContainer}>
        <div className={classes.gameInfoContainer}>
          <div className={classes.gameInfo}>Week 9</div>
          <div className={classes.gameInfo}>Sunday, Nov. 19th</div> 
        </div>
        <div className={classes.teamsContainer}>
        <div className={classes.teamColumnContainer}>
            <img src={Chiefs} alt="Chiefs" className={classes.teamImage}></img>
              <div>
                <div className={classes.teamName}>Chiefs</div>
              </div>
              <button className={classes.btnRecord}><div className={classes.record}>5-2</div></button>
              <div className={classes.btnPickContainer}>
                <button className={classes.btnPick}>Pick</button>
              </div>
          </div>
          <div className={classes.teamColumnContainer}>
            <img src={Raiders} alt="Raiders" className={classes.teamImage}></img>
              <div>
                <div className={classes.teamName}>Radiers</div>
              </div>
              <button className={classes.btnRecord}><div className={classes.record}>2-5</div></button>
              <div className={classes.btnPickContainer}>
                <button className={classes.btnPick}>Pick</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
