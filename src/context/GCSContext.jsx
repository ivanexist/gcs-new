import { createContext, Fragment, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const GCSContext = createContext();

const GCSProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const formatTextWithBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <Fragment key={index}>
        {line}
        <br />
      </Fragment>
    ));
  };
  const [gcsData, setGcsData] = useState(
    localStorage.getItem("gcsdata")
      ? JSON.parse(localStorage.getItem("gcsdata"))
      : []
  );

  useEffect(() => {
    const gcsData = localStorage.getItem("gcsdata");

    if (gcsData) setGcsData(JSON.parse(gcsData));
  }, []);

  useEffect(() => {
    localStorage.setItem("gcsdata", JSON.stringify(gcsData));
  }, [gcsData]);

  useEffect(() => {
    const fecthGcsData = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/src/json/gcsdata.json"
          );

          // After fetching data, the data will be stored in the gcs Data state
          setGcsData(response.data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fecthGcsData();
  }, []);

  return (
    <GCSContext.Provider
      value={{
        scrollToTop,
        formatTextWithBreaks,
        gcsData,
        setLoading,
        setError,
      }}
    >
      {children}
    </GCSContext.Provider>
  );
};

GCSProvider.PropTypes = { children: PropTypes.node.isRequired };

export default GCSProvider;
