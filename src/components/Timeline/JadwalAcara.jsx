import React from 'react'
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../Timeline/index.css'
// import WorkIcon from "@material-ui/icons/Work";
// import SchoolIcon from "@material-ui/icons/School";
// import StarIcon from "@material-ui/icons/StarRate";

export default function JadwalAcara() {
  return (
    <div class="history-tl-container">
    <ul class="tl">
      <li class="tl-item" ng-repeat="item in retailer_history">
        <div class="timestamp">
          3rd March 2015<br/> 7:00 PM
        </div>
        <div class="item-title">Start from Shire</div>
        <div class="item-detail">Don't forget the ring</div>
      </li>
      <li class="tl-item" ng-repeat="item in retailer_history">
        <div class="timestamp">
          19th March 2015<br/> 3:00 PM
        </div>
        <div class="item-title">Kill some Orcs</div>
        <div class="item-detail">Don't enter the caves!!</div>
      </li>
      <li class="tl-item" ng-repeat="item in retailer_history">
        <div class="timestamp">
          1st June 2015<br/> 7:00 PM
        </div>
        <div class="item-title">Throw that goddamn ring in the lava</div>
        <div class="item-detail">Also, throw that Gollum too</div>
      </li>
  
    </ul>
  
  </div>
    )
}
