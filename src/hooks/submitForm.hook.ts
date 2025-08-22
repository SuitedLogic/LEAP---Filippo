export const useSubmitForm = () => {
  const submitForm = async (data: unknown, endpoint: string, method: string) => {
    try {

      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

       if (!response.ok) {
        const errorMessage = `Form submission error: ${response.status} - ${response.statusText}`;
        
        throw (errorMessage);
      }

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
