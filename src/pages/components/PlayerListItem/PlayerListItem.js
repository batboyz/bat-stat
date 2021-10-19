import './PlayerListItem.scss';

const PlayerListItem = ({ data }) => {
  return (
    <div className="list-item-container">
      <div className="top-row">
        <div className="top-row-image">
        <img className="image" alt="player" src={data.image_url}/>
        </div>
        <div className="top-row-text">
          <div className="data name" title="Player Name">{data.name}</div>
          <div className="data team" title="Team">{data.team}</div>
          <div className="data position" title="Position">{data.position}</div>
        </div>
      </div>
      <div className="bottom-row">
        <div className="col">
          <div className="data hits" title="Hits">H: {data.hits}</div>
          <div className="data doubles" title="Doubles">2B: {data.doubles}</div>
          <div className="data triples" title="Triples">3B: {data.triples}</div>
          <div className="data hrs" title="Home Runs">HR: {data.home_runs}</div>
          </div>
          <div className="col">
            {/* TODO: needs to calculate BA and ONB% before displaying */}
            <div className="data avg" title="Batting Average">Avg: 0.00</div>
            <div className="data obp" title="On-Base Percentage">OBP: 0.00</div>
            <div className="data so" title="Strikeouts">SO: {data.strikeouts}</div>
            <div className="data bb" title="Walks">BB: {data.walks}</div>
          </div>
      </div>
      <div></div>
    </div>
  )
}

export default PlayerListItem;