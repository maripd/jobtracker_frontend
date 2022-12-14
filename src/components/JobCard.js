import './JobCard.css'
import { useNavigate } from 'react-router-dom'

const JobCard = (props) => {
  const navigate = useNavigate()

  const cardHandleClick = () => {
    // add id for path
    navigate(`/jobDetails/${props.id}`)
  }

  return (
    <div className="alljobs-container" onClick={cardHandleClick}>
      <li className="alljobs-list">
        <h3 class="jobcard-detail" id="companyname-home">
          {props.companyName}
        </h3>
        <span class="jobcard-detail" id="jobtitle-home">
          {props.jobTitle}
        </span>
        <span class="jobcard-detail">{props.hiringStatus}</span>
        <span class="jobcard-detail">{props.statusBar}</span>

        <div className="status-bar">
          <div className={props.applicationStatus}>
            {props.applicationStatus}
          </div>
        </div>
      </li>
    </div>
  )
}
export default JobCard
