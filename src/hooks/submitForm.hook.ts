export const useSubmitForm = () => {
  const submitForm = async (data: unknown, endpoint: string, method: string) => {
    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Form submission result:", result);
      return result;
    } catch (err) {
      console.error("Form submission error:", err);
      throw err;
    }
  };

  return { submitForm };
};
