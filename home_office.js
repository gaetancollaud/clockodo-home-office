const request = require('request');

const user = process.env.CLOCKODO_USER;
const key = process.env.CLOCKODO_API_KEY; 

const options = {
  json:true,
  auth:{
    user: user,
    pass: key
  }
}

function homeOffice(day){
  const addOptions = {
    ...options,
    method: 'POST',
    json: {
      date_since: day,
      date_until: day,
      type: 8,
    }
  };

  request('https://my.clockodo.com//api/absences', addOptions, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log(body);
  });

}

const args = process.argv;
if(args.length!=3){
    console.log("Usage: node home_office.js 2020-01-31");
}else{

    homeOffice(args[2]);
}


