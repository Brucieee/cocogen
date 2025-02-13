import React from "react";
import { ModalComponent1, ModalComponent2, ModalComponent3, ModalComponent4, ModalComponent5, ModalComponent6, ModalComponent7, Picture, Title, SubTitle, Contents } from "../Components/CocogenModals"; 
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ModalsPage() {
  return (
    <AuthenticatedLayout>
            <div className="grid grid-cols-3 gap-4 p-6 min-h-screen bg-gray-100">
      <ModalComponent1>
        <Picture src="../assets/modalPicture1.png" alt="Image 1" />
        <Title>Auto Excel Plus</Title>
        <SubTitle>Shift to a broader protection</SubTitle>
        <Contents paragraphs={[
            "Get Cocogen Auto Excel Plus Car Motor Insurance and gain access to our exclusive coverages and automotive services.",
            "Get exclusive access to Tripo Sagip, a 24-hour road assistance to motor car policyholders, as well as Gawa Agad, hassle-free claims processing and deductible-free repairs.",
            "Turbocharge your coverage with Turbo Shield and hit the road with complete confidence for coverages such as Road Rage Protection, Key Replacement Cover, and Misfuelling Cover, among others."
        ]}/>
        
      </ModalComponent1>

      <ModalComponent2>
        <Picture src="../assets/modalPicture2.png" alt="Image 2" />
        <Title>Domestic Travel Plus</Title>
        <SubTitle>Peace of mind for local travelers</SubTitle>
        <Contents paragraphs={[
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

        ]}/>
        
      </ModalComponent2>

      <ModalComponent3>
        <Picture src="../assets/modalPicture3.png" alt="Image 2" />
        <Title>International Travel Excel Plus</Title>
        <SubTitle>Best buddy to a hassle-free journey</SubTitle>
        <Contents paragraphs={[
            "Explore your destination with complete protection benefits and get coverage for personal accident, personal liability, medical expenses, travel assistance service, and more.",
            "Get optional coverage for cruise and COVID-19."
        ]}/>
        
      </ModalComponent3>

      <ModalComponent4>
        <Picture src="../assets/modalPicture4.png" alt="Image 2" />
        <Title>CTPL</Title>
        <SubTitle>Compulsory Third Party Liability required for LTO registration </SubTitle>
        <Contents paragraphs={[
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        ]}/>
        
      </ModalComponent4>

      <ModalComponent5>
        <Picture src="../assets/modalPicture5.png" alt="Image 2" />
        <Title>Hackguard</Title>
        <SubTitle>Hackguard brief description</SubTitle>
        <Contents paragraphs={[
            "Personal cyber insurance that keeps you secured from financial loss associated with your digital footprints and transactions",
            "Protect yourself from electronic fund transfer fraud, retail fraud, identity theft, and cyber bullying"
        ]}/>
        
      </ModalComponent5>

      <ModalComponent6>
        <Picture src="../assets/modalPicture6.png" alt="Image 2" />
        <Title>Pro-Tech</Title>
        <SubTitle>New essential for desktops and laptops</SubTitle>
        <Contents paragraphs={[
            "Coverage includes: accidental damage, liquid damage, accidental loss, theft, breakdown.",
        ]}/>
        
      </ModalComponent6>

      <ModalComponent7>
        <Picture src="../assets/modalPicture7.png" alt="Image 2" />
        <Title>Auto Excel Plus</Title>
        <SubTitle>Shift to a broader protection</SubTitle>
        <Contents paragraphs={[
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ]}/>
        
      </ModalComponent7>
    </div>

    </AuthenticatedLayout>
    
  );
}
