import AccordionItem from "./AccordionItem";

function Accordion() {
  return (
    <div className="space-y-10 lg:w-1/2 lg:space-y-7">
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
