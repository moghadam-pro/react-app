function LoginButton({ onLogin, isLoading }) {
  return (
    <motion.button 
      className="bg-[#e1141e] relative rounded-[8px] shrink-0 w-full"
      whileHover={{ backgroundColor: "#c1121a" }}
      whileTap={{ scale: 0.98 }}
      onClick={onLogin}
      disabled={isLoading}
    >
      <div aria-hidden="true" className="absolute border border-[#e1141e] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-center p-[8px] relative w-full">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <motion.div 
                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          ) : (
            <p className="font-['Estedad:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white" dir="auto">
              ورود
            </p>
          )}
        </div>
      </div>
    </motion.button>
  );
}