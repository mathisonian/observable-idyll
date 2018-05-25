const React = require('react');
const {Runtime, Inspector, Library } = require("../lib/notebook-runtime");
import notebook from "./notebooks/d3-change-line-chart";


class CustomComponent extends React.Component {

  componentDidMount() {
    const { runtime, main } = Runtime.load(notebook, Object.assign({}, new Library(), { width: 600 }), (variable) => {

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
