// const getHandler = (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "GET request"
//     })
// }

const data = require('../data.json');

const copy = data;
const new_obj = {};
copy.forEach((item) => {
  if (!(item.District_Name in new_obj)) {
    new_obj[item.District_Name] = Number(item.Vaccinated);
  } else {
    new_obj[item.District_Name] += Number(item.Vaccinated);
  }
});
function sortObjectEntries(obj) {
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el);
}
const obj = sortObjectEntries(new_obj);
// var i= 0;
// var k = new_obj.map((item) => {
//   i++;
//   if (i <= 10) return item;
// });
// var filtered = k.filter(function (el) {
//   return el != null;
// });
// const k = copy.map((x) => {
//   return [x.Vaccinated, x.District_Name];
// });
const topTenVac = (req, res) => {
  res.status(200).json({
    success: true,
    obj,
  });
};

const monthlyState = (req, res) => {
  const { state } = req.body;
  var l = copy.map((item) => {
    if (item.State == state) return item;
  });
  var fl = l.filter(function (el) {
    return el != null;
  });
  var sum_infected = 0,
    sum_recovered = 0;
  fl.map((item) => {
    sum_infected += Number(item.Infected);
    sum_recovered += Number(item.Recovered);
  });
  res.status(200).json({
    success: true,
    state,
    sum_recovered,
    sum_infected,
  });
};

module.exports = {
  topTenVac,
  monthlyState,
};
