const IconOrder = ({ ...props }) => {
  return (
    <svg 
      { ...props } 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      strokeWidth="2" 
      stroke="currentColor" 
      fill="none" 
      strokeLinecap="round"
      strokeLinejoin="round">  
      <path stroke="none" d="M0 0h24v24H0z"/>  
      <rect x="4" y="4" width="16" height="4" rx="1" />  
      <rect x="4" y="12" width="6" height="8" rx="1" />  
      <line x1="14" y1="12" x2="20" y2="12" />  
      <line x1="14" y1="16" x2="20" y2="16" />  
      <line x1="14" y1="20" x2="20" y2="20" />
    </svg>
  )
}

export default IconOrder;
