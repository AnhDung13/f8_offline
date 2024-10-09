import React, { memo } from "react";

export default memo(function Content() {
  console.log("Content render");
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorum
      odit accusamus officia dolor quo aliquam nam fuga suscipit ex. Odio
      excepturi, molestiae amet similique cum soluta ipsa quibusdam praesentium.
    </p>
  );
});
