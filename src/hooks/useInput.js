import { useCallback, useState } from "react";

export const useInput = (init = "") => {
  const [value, setValue] = useState(init);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange, setValue };
};
