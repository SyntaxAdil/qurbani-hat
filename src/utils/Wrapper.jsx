import React from "react";

const Wrapper = ({ cn, children }) => {
  return (
    <section className={`container max-w-6xl mx-auto my-2 px-4  ${cn}`}>
      {children}
    </section>
  );
};

export default Wrapper;
