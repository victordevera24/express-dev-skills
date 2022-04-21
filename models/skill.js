const skills = [
    {id: 1, name: "HTML", level: '4/5', done: true},
    {id: 13, name: "CSS", level: '1/5', done: false},
    {id: 123, name: "JavaScript", level: '4/5', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function getAll() {
  return skills;
}

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function create(skill){
  // Add the id
  skill.id = Date.now() % 1000000;
  // New todos wouldn't be done :)
  skill.done = false;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx,1)
}

function update(id, skill){
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills[idx].name = skill.name;
}
