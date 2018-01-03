const React = require('react');

module.exports = function SvgIcon(props) {
  const baseProps = {
    {% attrs %},
    className: '{% className %}',
    dangerouslySetInnerHTML: {
      __html: {% html %},
    }
  };

  const newProps = Object.assign({}, baseProps, props);
  return React.createElement('svg', newProps);
}
