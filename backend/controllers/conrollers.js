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
let obj = sortObjectEntries(new_obj);

obj = obj.slice(0, 10);

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
