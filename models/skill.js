const skills = [
    {id: 1, name: "HTML", level: '4/5', done: true},
    {id: 13, name: "CSS", level: '1/5', done: false},
    {id: 123, name: "JavaSript", level: '4/5', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
	// URL params are strings - convert to a number
	id = parseInt(id);
	return skills.find(skill => skill.id === id);
}