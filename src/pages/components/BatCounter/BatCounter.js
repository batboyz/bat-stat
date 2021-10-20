import { useState } from "react";
import "./BatCounter.scss";

function BallCounter() {
  const [ballcount, setBall] = useState(0);
  const [strikecount, setStrike] = useState(0);
  const [outcount, setOut] = useState(0);
  const [team1Score, setScore1] = useState(0);
  const [team2Score,setScore2] = useState(0);
  const [team1Hit, setTeamHit1] = useState(true);   // looks to see which team is currently hitting
  const [team2Hit, setTeamHit2] = useState(false);
  const [onBase, setOnBase] = useState(0)           // counts how many are on base  
  const [inningcount, setInning] = useState(1); 
  const [halfcount, setHalf] = useState(true);      // looks to see if in top of inning or bottom of inning

  const ballCounter = () => {
    if (ballcount < 3) setBall(ballcount + 1);
    else {
      setBall(0);
      setStrike(0);
      setOnBase(onBase + 1);
      if(onBase >= 3){
        setOnBase(3)
        if(team1Hit === true) setScore1(team1Score + 1);
        else setScore2(team2Score + 1);
      }
      else console.log("ERROR: TOO MANY ON BASE")
    }
  };

  const strikeCounter = () => {
    if (strikecount < 2) setStrike(strikecount + 1);
    else {
      setStrike(0);
      setBall(0);
      outCounter();
    }
  };

  const outCounter = () => {
    if (outcount < 2) {
      setOut(outcount + 1);
    } else {
      setOut(0);
      setOnBase(0);
      if (team1Hit === true)                    // switches what team is hitting
        {setTeamHit2(true); setTeamHit1(false);}
      else 
        {setTeamHit2(false); setTeamHit1(true);}
      if (halfcount === false) {                // increasing the inning based on the half innings
        setInning(inningcount + 1);
        setHalf(true);
      } else setHalf(false);
    }
  };
  
  let ballHit = () => {
    setStrike(0);
    setBall(0);
    if (onBase < 3) setOnBase(onBase + 1); 
    else  
      console.log("ERROR: TOO MANY ON BASE")
  };


  let ballHitOut = () => {
    setStrike(0);
    setBall(0);
    outCounter();
  };

  let hitHomerun = () => {
    setStrike(0);
    setBall(0);
    if (onBase > 0 ){
      if(team1Hit === true){
        setScore1(team1Score + onBase + 1 );
        setOnBase(0);
      }
      else{
        setScore2(team2Score + onBase + 1);
        setOnBase(0);
      }
    }
    else
      if(team1Hit === true){
        setScore1(team1Score + 1);
        setOnBase(0);
      }
      else{
       setScore2(team2Score + 1);
       setOnBase(0);
      }
  }

  let runBatted = (RBI) => {
    const convertedRBI = parseInt(RBI.target.value, 10);

    if (onBase >= convertedRBI){

      if (RBI.target.value === "1"){
        setOnBase(onBase - 1);
        if(team1Hit === true) setScore1(team1Score + 1);
        else setScore2(team2Score + 1);
      }
      else if (RBI.target.value === "2"){
        setOnBase(onBase - 2);
        if (team1Hit === true) setScore1(team1Score + 2);
        else setScore2(team2Score + 2);
      }
      else {
        setOnBase(onBase - 3);
        if (team1Hit === true) setScore1(team1Score + 3);
        else setScore2(team2Score + 3);
      }
  }
  else console.log("ERROR: NOT ENOUGH PLAYERS ON BASE")

}


  return (
    <div className="BallCounterpage">
      <div className="BallCounterpage-body">
        <div className="counters">
          <p>Team 1: {team1Score} vs. Team 2: {team2Score} </p>
          <p> Balls: {ballcount} </p>
          <button onClick={ballCounter} className="ballButton">
            Ball
          </button>
          <p> Strikes: {strikecount} </p>
          <button onClick={strikeCounter} className="ballButton">
            {" "}
            Strike
          </button>
          <p> Outs: {outcount} </p>
          <button onClick={ballHitOut} className="ballButton">
            {" "}
            Out{" "}
          </button>
          <p> Inning: {inningcount}  | On Base: {onBase} </p>
          <p>Hit Info: </p>
          <button onClick={ballHit} className="ballButton">
            {" "}
            Hit{" "}
          </button>
          <button onClick={hitHomerun} className="ballButton">
            {" "}
            Home Run{" "}
          </button>
          <p>Runs Batted In: </p>
          <button onClick={runBatted} value = "1" className="ballButton">
            {" "}
            1 Run{" "}
          </button>
          <button onClick={runBatted} value = "2" className="ballButton">
            {" "}
            2 Runs{" "}
          </button>
          <button onClick={runBatted} value = "3" className="ballButton">
            {" "}
            3 Runs{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BallCounter;
