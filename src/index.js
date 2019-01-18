import './styles.css';
import $ from 'jquery';
import { searchDoctorsByCondition } from './doctor-search.js'

console.log(process.env.exports.apiKey);

$(document).ready(async () => {
  console.log(await searchDoctorsByCondition("sore throat"));
});
