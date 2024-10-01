import AccordionItem from "./AccordionItem";

function Accordion() {
  return (
    <div className='w-1/2 space-y-2'>
      {accordionItems.map((item) => (
        <AccordionItem key={item} item={item} />
      ))}
    </div>
  );
}

export default Accordion;

const accordionItems = [
  "Does Fluid Al increase wellbeing and meaning in life?",
  "What can curiosity, wonder, and awe do for you?",
  "Does Fluid Al increase wellbeing and meaning in life?",
  "What can curiosity, wonder, and awe do for you?",
  "Does Fluid Al increase wellbeing and meaning in life?",
  "What can curiosity, wonder, and awe do for you?",
  "Does Fluid Al increase wellbeing and meaning in life?",
  "What can curiosity, wonder, and awe do for you?",
];
