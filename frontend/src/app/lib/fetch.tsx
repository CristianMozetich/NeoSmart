// FETCHING DE CATEGORÍAS Y USUARIOS
import { useState, useEffect } from "react";

export type typeUser = {
  id: number;
  name: string;
  length: number;
};

export interface typeCategory {
  category_id: number;
  name: string;
  subname: string;
  cost: string;
  slug: string;
  image_path: string;
}

export const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/categories", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { categories };
};

export const useFetchUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { user };
};
