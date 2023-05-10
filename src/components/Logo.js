import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise img sont accesible dans "public" */}
      <img src="" alt="logo react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;