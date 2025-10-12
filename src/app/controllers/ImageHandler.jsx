export const ImageHandler = async (file) => {
  try {
    // Check if file exists
    if (!file) return;

    const MAX_SIZE = 1 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      throw new Error("File is too large. Max allowed size is 2 MB.");
    }

    const data = new FormData();
    data.append("file", file);

    const res = await fetch("/api/imagehandler", {
      method: "POST",
      body: data, // ✅ don't add headers manually
    });

    if (!res.ok) {
      throw new Error("Failed to upload image");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
