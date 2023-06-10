import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) || initialValue)
      : initialValue
  );

  const updateLocalStorage = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return {
    value,
    updateLocalStorage,
  };
};

export default useLocalStorage;
