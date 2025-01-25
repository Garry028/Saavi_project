import { useState, useEffect } from "react";
import GalleryItem from "../components/galleryItem";

const Gallery = () => {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const components = [
    { id: 0, text: "ALL", folder: "ALL", imageCount: 0 }, // "ALL" component
    { id: 1, text: "Saavi Hotel Sector 43", folder: "Saavi Hotel Sector 43_output", imageCount: 24 },
    { id: 2, text: "Saavi Hotel Sector 45", folder: "Saavi Hotel Sector 45_output", imageCount: 33 },
    { id: 3, text: "Saavi Hotel Sector 46", folder: "Saavi Hotel Sector 46_output", imageCount: 34 },
    { id: 4, text: "Basai Road Sector 10", folder: "BASAI ROAD SECTOR 10_output", imageCount: 6 },
    { id: 5, text: "Saavi Hotel Jibhi", folder: "Saavi Hotel - Jibhi_output", imageCount: 50 },
  ];

  // Set default folder to "ALL" when the component mounts
  useEffect(() => {
    if (!selectedFolder) {
      setSelectedFolder("ALL");
    }
  }, [selectedFolder]);

  const handleComponentClick = (folder: string) => {
    setSelectedFolder(folder);
  };

  const getImageCount = (folder: string | null) => {
    if (!folder) return 0;
    const component = components.find((item) => item.folder === folder);
    return component ? component.imageCount : 0;
  };

  const renderAllImages = () => {
    return components.map((component) => {
      if (component.folder !== "ALL") {
        return Array.from({ length: getImageCount(component.folder) }).map((_, index) => (
          <div
            key={`${component.folder}-image-${index}`}
            style={{
              overflow: "hidden", // Ensures zoom effect doesn't overflow the container
              borderRadius: "5px",
            }}
          >
            <img
              src={`../../hotels/${component.folder}/image${index + 1}.jpeg`}
              alt={`Image ${index + 1}`}
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                transition: "transform 0.3s ease", // Smooth transition
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} // Zoom in
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset zoom
            />
          </div>
        ));
      }
      return null;
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 className="text-4xl font-bold text-[#8B2B06] text-center mb-16">OUR GALLERY</h1>
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        {components.map((component) => (
          <GalleryItem
            key={component.id}
            text={component.text}
            onClick={() => handleComponentClick(component.folder)}
            isSelected={selectedFolder === component.folder}
          />
        ))}
      </div>

      {/* Render all images if "ALL" is selected */}
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
          {selectedFolder === "ALL" ? renderAllImages() : (
            Array.from({ length: getImageCount(selectedFolder) }).map((_, index) => (
              <div
                key={index}
                style={{
                  overflow: "hidden", // Ensures zoom effect doesn't overflow the container
                  borderRadius: "5px",
                }}
              >
                <img
                  src={`../../hotels/${selectedFolder}/image${index + 1}.jpeg`}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease", // Smooth transition
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} // Zoom in
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset zoom
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
