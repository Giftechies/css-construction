"use client"
import React, { useState } from 'react';

const App = () => {
  // State for the modal's visibility and the image to display
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [modalImageAlt, setModalImageAlt] = useState('');

  // Function to open the modal with the selected image
  const openModal = (imageSrc, imageAlt) => {
    setModalImageSrc(imageSrc);
    setModalImageAlt(imageAlt);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc('');
    setModalImageAlt('');
  };

  // Array of image data for the gallery
  const images = [
    { src: 'https://media.istockphoto.com/id/504073608/photo/excavator-loading-dumper-truck-on-mining-site.webp?a=1&b=1&s=612x612&w=0&k=20&c=S-Xp_6KaYhNKwRnxGbF4L1_2k3xxJVQitQdHfp9_rJ0=', alt: 'Gallery Image 1', title: 'Image One' },
    { src: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D', alt: 'Gallery Image 2', title: 'Image Two' },
    { src: 'https://placehold.co/416x300/4d5a42/FFFFFF?text=Gallery+Image+3', alt: 'Gallery Image 3', title: 'Image Three' },
    { src: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D', alt: 'Gallery Image 4', title: 'Image Four' },
    { src: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D', alt: 'Gallery Image 5', title: 'Image Five' },
    { src: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D', alt: 'Gallery Image 6', title: 'Image Six' },
  ];

  return (
    <div className="container font-inter">
      <section className="relative py-12 px-4 md:py-24">
        <div className="container mx-auto">
          <div className="grid items-center gap-6 max-sm:justify-center sm:grid-cols-3">
            {/* Map over the images array to render each gallery item */}
            {images.map((image, index) => (
              <div
                key={index}
                className="group theme-transition-3 relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openModal(image.src, image.alt)}
              >
                <img className="w-full h-auto" src={image.src} alt={image.alt} />
                <div
                  className="rounded-lg theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full items-center justify-center gap-6 bg-gradient opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100 max-sm:flex-col-reverse sm:flex-col p-4"
                  style={{
                    transition: 'all 0.4s ease-in-out',
                    background: 'linear-gradient(0deg, #005655 0%, rgba(9, 91, 90, 0.20) 100%)'
                  }}
                >
                  <p className="font-medium text-white text-center text-xl">{image.title}</p>
                  <button className="rounded-full px-6 py-2 border-2 theme-transition-3 border-[#005655] bg-[#005655] text-white hover:border-[#F27845] hover:bg-transparent hover:text-white">
                    View Image
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Modal for displaying the full-size image */}
      {isModalOpen && (
        <div
          className="fixed z-100 top-0 left-0 w-full  h-full bg-black bg-opacity-90 overflow-auto flex justify-center items-center"
          onClick={(e) => {
            // Close the modal if the user clicks the background
            if (e.target.id === 'modal-overlay') {
              closeModal();
            }
          }}
          id="modal-overlay"
        >
          <span
            className="absolute text-primary top-4 right-16  text-white text-[15vh] font-bold cursor-pointer transition-colors duration-200 hover:text-gray-400"
            onClick={closeModal}
          >
            &times;
          </span>
          <img className="block w-[90%] h-[90%] object-contain" src={modalImageSrc} alt={modalImageAlt} />
        </div>
      )}
    </div>
  );
};

export default App;
