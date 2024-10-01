function AccordionItem({ item }: { item: string }) {
  return (
    <div className='flex items-center justify-between border-b pb-2 border-b-white/50 cursor-pointer'>
      <p className='text-[18px]'>{item}</p>
      <span className='pr-3'>+</span>
    </div>
  );
}

export default AccordionItem;
