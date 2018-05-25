const React = require('react');
const {Runtime, Inspector, Library } = require("../lib/notebook-runtime");
import notebook from "./notebooks/d3-change-line-chart";



const cleanImports = (nb) => {
  return nb;
  nb.modules = nb.modules.map((mod) => {
    mod.variables = mod.variables.map((v) => {
      if (v.name && v.name === 'd3') {
        v.value = function() { return d3 }
      }
      return v;
    })
    return mod;
  })
  return nb;
}




class CustomComponent extends React.Component {


  componentDidMount() {
    console.log(cleanImports(notebook));
    const { runtime, main } = Runtime.load(cleanImports(notebook), Object.assign({}, new Library(), { width: 600 }), (variable) => {

      if (variable.name && Object.keys(this.props.variables || {}).indexOf(variable.name) > -1) {
        variable.value = (function* (){ while(true) yield this.props.variables[variable.name] }).bind(this);
      }
      if (variable.name && (this.props.showCells || []).indexOf(variable.name) > -1) {
        const el = document.createElement('div');
        this._ref.appendChild(el);
        return new Inspector(el);
      }

    });
    this._runtime = runtime;
  }

  render() {
    const { idyll, hasError, updateProps, ...props } = this.props;
    return (
      <div ref={(ref) => this._ref = ref} />
    );
  }
}

module.exports = CustomComponent;
