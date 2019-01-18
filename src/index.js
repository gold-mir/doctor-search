import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { searchDoctorsByName, searchDoctorsByCondition, getConditionsList } from './doctor-search.js'

$(document).ready(async () => {
  setupConditionList();

  $("#search-conditions").click(async () => {
    let condition = $("#condition-select").val();
    let doctors;
    try {
      doctors = await searchDoctorsByCondition(condition);
      printDoctorNames(doctors);
    } catch(error){
      alert(error);
    }
  });

  $("#search-doctors").click(async () => {
    let query = $("#doctor-name-input").val();
    let doctors;
    try {
      doctors = await searchDoctorsByCondition(query);
      printDoctorNames(doctors);
    } catch(error){
      alert(error);
    }
  });
});

async function setupConditionList(){
  let conditions = await getConditionsList();
  let conditionSelect = $("#condition-select");
  for(let condition of conditions){
    let item = `<option value = ${condition.uid}>${condition.name}</option>`
    conditionSelect.append(item);
  }
}

function printDoctorNames(list){
  let out = $("#output");
  out.text("");
  if(list.length === 0){
    out.append(`<h6>Your query returned no results. Try another query.</h6>`)
  }
  for(let doctor of list){
    let firstName = doctor.profile.first_name;
    let lastName = doctor.profile.last_name;
    let address = doctor.practices.filter(practice => practice.location_slug === "wa-seattle")[0];
    out.append(`<div class="doctor">
    <h3>${firstName} ${lastName}</h3>
    <p>Phone: ${address.phones[0].number} ${address.website ? `| <a href="${address.website}">${address.website}</a>` : ""}</p>
    <p>${address.visit_address.street}, ${address.visit_address.city}, ${address.visit_address.state}, ${address.visit_address.zip}</p>
    <h6>${address.accepts_new_patients ? "Accepting new patients" : "Not accepting new patients"}</h6>
    </div>`);
  }
}
