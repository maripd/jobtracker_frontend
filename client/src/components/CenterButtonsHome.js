import { useNavigate } from 'react-router-dom'

const CenterButtons = () => {
  const navigate = useNavigate()

  const addJobClick = () => {
    navigate('/createJob')
  }
  return (
    <div className="centerbtns-container">
      <div className="addjob-btncontainer">
        <button className="addjob-btn" onClick={addJobClick}>
          + ADD NEW JOB
        </button>
      </div>
      <div className="threecenter-btns">
        <button className="search-btn">Search</button>
        <button className="filter-btn">Filter</button>
        <button className="sort-btn">Sort</button>
      </div>
    </div>
  )
}

export default CenterButtons
