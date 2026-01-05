export default function Input() {
return (
  <>
    <motion.li
      onClick={() => onClick(item.id)}
      className={`bg-white relative rounded-[8px] shrink-0 w-full cursor-pointer transition-all duration-300`}
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute border-2 border-[#e1141e] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_8px_0px_rgba(225,20,30,0.28)]"
        />
      )}
      <div className="flex flex-row-reverse items-center justify-between p-[16px] size-full px-[16px] py-[12px]">
        <DatabaseIcon />
        <div className="flex-1 flex items-center justify-start text-right">
          <p className="font-['Estedad:Regular',sans-serif] leading-[24px] not-italic text-[#292929] text-[14px] text-nowrap text-right" dir="auto">
            {item.name}
          </p>
        </div>
        {isSelected && <CheckIcon />}
      </div>
    </motion.li>
    </>
  );}
