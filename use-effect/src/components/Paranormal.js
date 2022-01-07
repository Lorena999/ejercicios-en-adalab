import React, { useEffect, useState } from "react";
import callToApi from "../services/Api";

const Paranormal = () => {
  const [paranormalData, setParanormalData] = useState({});
  useEffect(() => {
    callToApi().then((data) => {
      setParanormalData(data);
    });
  }, []);

  // const renderShow = () => {
  //   paranormalData.map((paranormalData) => {
  //     return <li>{paranormalData.name}</li>;
  //   });
  // };

  return (
    <div>
      <h1 className="header__title">Paranormal activity</h1>
      {/* <ul>{renderShow()}</ul> */}
    </div>
  );
};

export default Paranormal;
