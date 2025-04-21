import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

// input - to get the dynamic data from the menu_API
const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try{
      const response = await fetch(MENU_API + resId);
      if(!response.ok){
        throw new error(`HTTP Error Status : ${response.status}`);
      }
      const jsonData = await response.json();
      console.log(jsonData);

      // updating it into the state variable
      setResInfo(jsonData.data);
    }
    catch(error){
      console.log("Error Fetching Data : " + error);
    }
  }

  // output - abstract fetch API logic and which return the info
  return resInfo;
}

export default useRestaurantMenu;