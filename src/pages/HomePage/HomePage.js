import {useState} from "react";
import baseball from '../../static/baseball.png';
import './HomePage.scss';

function HomePage() {
    const[ballcount, setBall ] = useState(0);
    const[strikecount, setStrike] = useState(0);
    const[outcount, setOut] = useState(0);
    const[inningcount, setInning] = useState(1);
    const[halfcount, setHalf] = useState(true); // looks to see if in top of inning or bottom of inning
  
    const ballCounter = () => {
        if (ballcount < 3 ) 
            setBall(ballcount + 1); 
        else{               
            setBall(0);
            setStrike(0);
        }          
    }

    const strikeCounter = () => {
        if (strikecount < 2)
            setStrike(strikecount + 1);
        else{
            setStrike(0);
            setBall(0);
            outCounter();
        }           
    }

    const outCounter = () => {
        if(outcount < 2){    
            setOut(outcount + 1);
        }
        else {
            setOut(outcount - outcount)
            if(halfcount === false ){
                setInning(inningcount + 1)
                setHalf(true);
            }
            else
                setHalf(false);
        } 
    }

    let ballHit = () => {
        setStrike(0)
        setBall(0)

    }

    let ballHitOut = () => {
        setStrike(0)
        setBall(0)
        outCounter();
    }


    return (
        <div className="Homepage">
            <div className="Homepage-body">
                <img src={baseball} className="Homepage-logo" alt="logo" />
                <p>BatBoyz Homepage</p>
                <a
                className="Homepage-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                React Documentation Here
                </a>
                <div className="counters">
                <p> Balls: {ballcount} </p>
                <button onClick={ballCounter} className='ballButton'>Ball</button>
                <p> Strikes: {strikecount} </p>
                <button onClick={strikeCounter} className='ballButton'> Strike</button>
                <p> Outs: {outcount} </p>
                <button onClick={ballHitOut} className='ballButton'> Out </button>
                
                <p> Inning: {inningcount} </p>
                <button onClick={ballHit} className='ballButton'> Hit </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;