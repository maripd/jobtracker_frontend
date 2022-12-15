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
  if (currentDisplay === 'show') {
    setDisplay('show')
  }

  const formHandleChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  return (
    <div className="centerbtns-container">
      <div className="addjob-btncontainer">
        <button className="addjob-btn" onClick={addJobClick}>
          + ADD NEW JOB
        </button>
      </div>

      <div className="threecenter-btns">
        <img src={filter} id="filter-icon" onClick={showClick} />
        {/* <div className="dropdown show">
          <select onChange={formHandleChange}>
            <option value="applied">APPLIED</option>
            <option value="phoneinterview">PHONE INTERVIEW</option>
            <option value="hiring">HIRING INTERVIEW</option>
            <option value="joboffer">JOB OFFER</option>
            <option value="rejected">REJECTED</option>
            <option value="ghosting">GHOSTING</option>
          </select>
        </div> */}
        <img src={sort} id="sort-icon" />
      </div>
    </div>
  )
}

export default CenterButtons
