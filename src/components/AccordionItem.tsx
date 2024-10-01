function AccordionItem({ item }: { item: string }) {
  return (
    <div className="flex cursor-pointer items-start justify-between border-b border-b-white/50 pb-2 xl:items-center">
      <p className="text-[18px]">{item}</p>
      <span className="pr-3">+</span>
    </div>
  );
}

export default AccordionItem;
