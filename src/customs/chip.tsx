export const Chip = ({ text }: { text: string }) => {
  return (
    <div className="bg-[#DCFCE7] text-[#16A34A] w-full rounded-md px-8 py-2 flex items-center justify-center">
      {text}
    </div>
  );
};
