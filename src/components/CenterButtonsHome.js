import { useNavigate } from 'react-router-dom'
import filter from './filter.png'
import search from './search.png'
import sort from './sort.png'

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
      <div>
        <select>
          <option value="applied">APPLIED</option>
          <option value="phoneinterview">PHONE INTERVIEW</option>
          <option value="hiring">HIRING INTERVIEW</option>
          <option value="joboffer">JOB OFFER</option>
          <option value="rejected">REJECTED</option>
          <option value="ghosting">GHOSTING</option>
        </select>
      </div>
      <div className="threecenter-btns">
        {/* <img src={search} id="search-icon" /> */}
        <img src={filter} id="filter-icon" />
        <img src={sort} id="sort-icon" />
      </div>
    </div>
  )
}

export default CenterButtons
