import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FetchData = ({ enteredOtp }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch("./data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, [data]);

  const otpValue =
    data.values &&
    data.values[3] &&
    data.values[3].value !== undefined &&
    data.values[3].value;

  if (enteredOtp === otpValue) {
    localStorage.setItem("sessionStarted", "true");
    navigate("/songdashboard");
  }

  return null;
};

export default FetchData;
