// import { cache } from "react";

// import { toast } from "sonner";

export const fetchData = /*cache*/ async (url: string) => {
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 10,
      },
    });

    if (!response.ok) {
      // Log the status code and the text of the error response from the API
      const errorText = await response.text();
      // console.error(`API Error: Status ${response.status} from ${url}`);
      // toast.error("API Error Body:");

      // Throw a more informative error that includes the status
      throw new Error(
        `Failed to fetch data from ${url}: Status ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    // This catch block will now receive the detailed error
    // toast.error("Fetch failed:");
    return null;
  }
};
