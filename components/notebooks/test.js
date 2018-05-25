// URL: https://beta.observablehq.com/@mathisonian/test
// Title: Untitled
// Author: Matthew Conlen (@mathisonian)
// Version: 17
// Runtime version: 1

const m0 = {
  id: "b11ada74a366bb26@17",
  variables: [
    {
      name: "test",
      value: (function()
{
  return 4; 
}
)
    },
    {
      name: "derived",
      inputs: ["test"],
      value: (function(test){return(
test
)})
    }
  ]
};

const notebook = {
  id: "b11ada74a366bb26@17",
  modules: [m0]
};

export default notebook;
