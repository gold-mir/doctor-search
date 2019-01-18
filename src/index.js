import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { searchDoctorsByName, searchDoctorsByCondition, getConditionsList } from './doctor-search.js'

$(document).ready(async () => {
  console.log((await getConditionsList()));
});
