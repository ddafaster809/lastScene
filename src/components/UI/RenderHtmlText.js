import React from 'react';
import RenderHtml from 'react-native-render-html';
import {wp} from '../../util/helpers';

const RenderHtmlText = ({html}) => (
  <>
    {html && (
      <RenderHtml
        contentWidth={wp(50)}
        source={{
          html: `<span style="color: #2B2B2B; text-align: justify;">${html}</span>`,
        }}
      />
    )}
  </>
);

export default RenderHtmlText;
