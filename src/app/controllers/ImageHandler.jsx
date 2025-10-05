export const ImageHandler = async (file) => {
  try {
    const data = new FormData();
    data.append("file", file);
    if (!data) return;

    let res = await fetch("/api/imagehandler", {
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
