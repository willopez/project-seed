import React from 'react';

const dev = process.env.NODE_ENV === 'development';

const StylesheetTag = props => {
  if (dev) {
    const { style } = props;
    const element = dev && (
      <style dangerouslySetInnerHTML={{ __html: style }} />
    );
    return element;
  }

  return <link rel="stylesheet" href="static/css/app.css" />;
};

export default StylesheetTag;
