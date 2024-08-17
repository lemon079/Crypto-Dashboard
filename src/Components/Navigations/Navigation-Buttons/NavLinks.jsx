import React, { useContext, useState } from "react";

const NavLinks = ({ icon: Icon, text, customClass = null }) => {


  return (
      <button className={`text-sm flex w-full items-center py-3 pl-4 rounded-lg font-semibold mb-1 gap-3 ${customClass}`}>
        <Icon />
        {text}
      </button>
  );
};

export default NavLinks;
