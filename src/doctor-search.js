export async function searchDoctorsByCondition(condition){
  let doctors = [];
  let query = `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=wa-seattle&skip=0&limit=100&user_key=${process.env.exports.apiKey}`;
  let json = await (await fetch(query)).json();
  let count = json.meta.total;

  for(let doctor of json.data){
    doctors.push(doctor);
  }
  while(doctors.length < count){
    query = `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=wa-seattle&skip=${doctors.length}&limit=100&user_key=${process.env.exports.apiKey}`;
    json = await (await fetch(query)).json();
    for(let doctor of json.data){
      doctors.push(doctor);
    }
  }

  return doctors;
}
