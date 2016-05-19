import React, { Component, PropTypes } from 'react';
import metawidget from 'metawidget';


export default class Metawidget extends Component {
  static propTypes = {
    toInspect: PropTypes.object,
    config: PropTypes.object,
  };

  buildWidget = (elementName, attributes, mw) => {
    console.log(attributes);
    let widget;
    if (attributes.type === 'string') {
      if (attributes.large) {
        widget = (props) => (<textarea {...props} />);
        widget.type = 'textarea';
        return widget;
      }
      widget = (props) => (<input type="text" {...props} />);
      widget.type = 'input';
      return widget;
    }
    if (attributes.type === 'function') {
      widget = (props) => (
        <button onClick={this.props.toInspect[attributes.name]} {...props}>{attributes.name}</button>
      );
      widget.type = 'button';
      return widget;
    }
    return; // eslint-disable-line consistent-return
  }

  processWidget = (widget, elementName, attributes, mw) => {
    return Object.assign((props) => {
      const newProps = {
        ...props,
        ref: attributes.name,
      };
      if (widget.type === 'input') newProps.value = this.props.toInspect[attributes.name];
      if (widget.type === 'textarea') newProps.children = this.props.toInspect[attributes.name];

      return widget(newProps);
    }, widget);
  }

  addId = (widget, elementName, attributes, mw) => {
    return Object.assign((props) => widget({
      ...props,
      id: attributes.name,
    }), widget);
  }

  layoutWidget = (widget, elementName, attributes, container, mw) => {
    console.log(container);
    container.push(
      <div>
        <label htmlFor={attributes.name}>{metawidget.util.uncamelCase(attributes.name)}:</label>
        {widget()}
      </div>
    );
  }

  clearWidgets = () => {};
  buildNestedMetawidget = () => {};
  overriddenNodes = [];

  render() {
    const container = [];
    const _pipeline = new metawidget.Pipeline(container);

    // Configure defaults

    _pipeline.inspector = new metawidget.inspector.PropertyTypeInspector();
    _pipeline.widgetBuilder = this.buildWidget;
    _pipeline.widgetProcessors = [this.processWidget, this.addId];
    _pipeline.layout = this.layoutWidget;
    _pipeline.configure(this.props.config);
    const inspected = _pipeline.inspect(this.props.toInspect);
    _pipeline.buildWidgets(inspected, this);

    return <div>{container}</div>;
  }
}
