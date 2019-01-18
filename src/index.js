import './styles.css';
import $ from 'jquery';
import { searchDoctorsByName, searchDoctorsByCondition, getConditionsList } from './doctor-search.js'

$(document).ready(async () => {
  console.log((await getConditionsList()));
});
