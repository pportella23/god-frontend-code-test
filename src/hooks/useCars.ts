import axios from "axios";
import { useEffect, useState } from "react";
import { Car } from "../types/car.interface";
import { BASE_URL } from "../constants";

export function useCars() {
  const [cars, setCars] = useState<Car[]>([]);
  useEffect(() => {
    axios.get(`${BASE_URL}/api/cars`).then((res) => {
      setCars(res.data);
    });
  }, []);

  return { cars };
}
