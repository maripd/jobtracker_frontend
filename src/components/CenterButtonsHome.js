import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import filter from './filter.png'
import search from './search.png'
import sort from './sort.png'

const CenterButtons = () => {
  const navigate = useNavigate()
  const [currentDisplay, setDisplay] = useState('hide')
  const [currentValue, setValue] = useState('')

  const addJobClick = () => {
    navigate('/createJob')
  }

  // const deletebtnHandleClick = () => {
  //   if (currentDisplay === false) {
  //     setDisplay(true)
  //   }
  // }
  // let panelDisplay = 'hide'
  // if (currentDisplay === true) {
  //   panelDisplay = ''
  // }

  // const xHandleClick = (e) => {
  //   if (currentDisplay === true) {
  //     setDisplay(false)
  //   }

  const showClick = (e) => {
    if (currentDisplay === 'hide') {
      setDisplay('show')
    }
  }
  let panelDisplay = 'show'
  if (currentDisplay === '')
    return (
      <div className="centerbtns-container">
        <div className="addjob-btncontainer">
          <button className="addjob-btn" onClick={addJobClick}>
            + ADD NEW JOB
          </button>
          <div className="dropdown show">
            <select>
              <option value="applied">APPLIED</option>
              <option value="phoneinterview">PHONE INTERVIEW</option>
              <option value="hiring">HIRING INTERVIEW</option>
              <option value="joboffer">JOB OFFER</option>
              <option value="rejected">REJECTED</option>
              <option value="ghosting">GHOSTING</option>
            </select>
          </div>
        </div>

        <div className="threecenter-btns">
          {/* <img src={search} id="search-icon" /> */}
          <img src={filter} id="filter-icon" onClick={filterClick} />
          <img src={sort} id="sort-icon" />
        </div>
      </div>
    )
}

export default CenterButtons
