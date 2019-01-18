import './styles.css';
import $ from 'jquery';
import { searchDoctorsByCondition } from './doctor-search.js'

$(document).ready(async () => {
  console.log((await searchDoctorsByCondition("sore throat")));
});
