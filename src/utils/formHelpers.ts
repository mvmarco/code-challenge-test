import { UseFormSetError } from "react-hook-form";

export const setFormErrors = ({
  error,
  setError,
  fields,
}: {
  error: Record<string, string[]>;
  setError: UseFormSetError<any>;
  fields: string[];
}) => {
  Object.entries(error).forEach(([pointer, error]) => {
    if (fields.concat(["base"]).includes(pointer)) {
      setError(
        pointer,
        { type: "custom", message: error.join(". ") },
        { shouldFocus: true }
      );
    }
  });
};
