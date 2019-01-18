export async function searchDoctorsByCondition(condition){

}

async function getDoctorConditionPage(condition, skip){
  let query = `https://api.betterdoctor.com/2016-03-01/doctors?query=${}&location=wa-seattle&skip=${skip}&limit=100&user_key=${process.env.exports.apiKey}`;
}
