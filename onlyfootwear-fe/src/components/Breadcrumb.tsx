import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b mb-2">
      <button
        className="w-full text-left p-4 font-semibold bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="p-4 bg-white">{content}</div>}
    </div>
  );
};

export default Accordion;
