function ScrollIndicator() {
  return (
    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="flex flex-col items-center">
        <span className="text-gray-400 dark:text-gray-500 text-sm mb-2">Scroll</span>
        <svg 
          className="w-6 h-6 text-gray-400 dark:text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  )
}

export default ScrollIndicator