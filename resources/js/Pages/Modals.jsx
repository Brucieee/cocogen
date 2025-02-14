import React, { useState } from "react";
import ModalComponent from "../Components/Modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Modals() {
  const [openModal, setOpenModal] = useState(null); // Track which modal is open

  const modalData = [
    {
      id: 1,
      image: "../assets/modalPicture1.png",
      title: "Auto Excel Plus",
      subtitle: "Shift to a broader protection",
      paragraphs: [
        "Get Cocogen Auto Excel Plus Car Motor Insurance and gain access to our exclusive coverages and automotive services.",
        "Get exclusive access to Tripo Sagip, a 24-hour road assistance to motor car policyholders, as well as Gawa Agad, hassle-free claims processing and deductible-free repairs.",
        "Turbocharge your coverage with Turbo Shield and hit the road with complete confidence for coverages such as Road Rage Protection, Key Replacement Cover, and Misfuelling Cover, among others."
      ],
    },
    {
      id: 2,
      image: "../assets/modalPicture2.png",
      title: "Domestic Travel Plus",
      subtitle: "Peace of mind for local travelers",
      paragraphs: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ],
    },
    {
      id: 3,
      image: "../assets/modalPicture3.png",
      title: "International Travel Excel Plus",
      subtitle: "Best buddy to a hassle-free journey",
      paragraphs: [
        "Explore your destination with complete protection benefits and get coverage for personal accident, personal liability, medical expenses, travel assistance service, and more.",
        "Get optional coverage for cruise and COVID-19."
      ],
    },
    {
      id: 4,
      image: "../assets/modalPicture4.png",
      title: "CTPL",
      subtitle: "Compulsory Third Party Liability required for LTO registration",
      paragraphs: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      ],
    },
    {
      id: 5,
      image: "../assets/modalPicture5.png",
      title: "Hackguard",
      subtitle: "Hackguard brief description",
      paragraphs: [
        "Personal cyber insurance that keeps you secured from financial loss associated with your digital footprints and transactions",
        "Protect yourself from electronic fund transfer fraud, retail fraud, identity theft, and cyber bullying"
      ],
    },
    {
      id: 6,
      image: "../assets/modalPicture6.png",
      title: "Pro-Tech",
      subtitle: "New essential for desktops and laptops",
      paragraphs: [
        "Coverage includes: accidental damage, liquid damage, accidental loss, theft, breakdown.",
      ],
    },
    {
      id: 7,
      image: "../assets/modalPicture7.png",
      title: "Auto Excel Plus",
      subtitle: "Shift to a broader protection",
      paragraphs: [
        "is aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "is aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "is aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ],
    },

  ];

  return (
    <AuthenticatedLayout>
      <div className="grid grid-cols-3 gap-4 p-6 min-h-screen bg-gray-100">
        {modalData.map((modal) => (
          <button
            key={modal.id}
            onClick={() => setOpenModal(modal.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Open {modal.title}
          </button>
        ))}
      </div>

      {modalData.map((modal) => (
        <ModalComponent
          key={modal.id}
          isOpen={openModal === modal.id}
          onClose={() => setOpenModal(null)}
          image={modal.image}
          title={modal.title}
          subtitle={modal.subtitle}
          paragraphs={modal.paragraphs}
          ButtonComponent={() => (
            <button
              onClick={() => setOpenModal(null)}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Confirm
            </button>
          )}
        />
      ))}
    </AuthenticatedLayout>
  );
}
