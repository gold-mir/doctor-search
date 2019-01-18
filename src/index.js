import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { searchDoctorsByName, searchDoctorsByCondition, getConditionsList } from './doctor-search.js'

$(document).ready(async () => {
  setupConditionList();

  $("#search-conditions").click(async () => {
    let condition = $("#condition-select").val();
    let doctors = await searchDoctorsByCondition(condition);
    printDoctorNames(doctors);
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
  for(let item of list){
    console.log(item.profile.first_name);
  }
}
