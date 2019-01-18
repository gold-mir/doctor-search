import './styles.css';
import $ from 'jquery';

async function uwu(){
  return "uwu";
}

$(document).ready(async () => {
  let text = await uwu();
  console.log(text);
})
