
import React from 'react';

export const BrainIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 1.43.69 2.72 1.76 3.54A6.5 6.5 0 0 0 8 18.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5a6.5 6.5 0 0 0-1.26-3.96A4.5 4.5 0 0 0 16.5 6.5 4.5 4.5 0 0 0 12 2Z" />
    <path d="M12 2a4.5 4.5 0 0 1 4.5 4.5c0 1.43-.69 2.72-1.76 3.54A6.5 6.5 0 0 1 16 18.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5a6.5 6.5 0 0 1 1.26-3.96A4.5 4.5 0 0 1 7.5 6.5 4.5 4.5 0 0 1 12 2Z" />
    <path d="M12 14a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5Z" />
    <path d="M2.5 13.5a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5Z" />
    <path d="M21.5 13.5a2.5 2.5 0 0 0-2.5-2.5 2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5Z" />
  </svg>
);

export const RobotIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);

export const ChipIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M7 21v-4" />
    <path d="M12 21v-4" />
    <path d="M17 21v-4" />
    <path d="M3 7h18" />
    <path d="M3 12h18" />
    <path d="M3 17h18" />
    <path d="M7 3v-4" />
    <path d="M12 3v-4" />
    <path d="M17 3v-4" />
    <path d="M21 7h4" />
    <path d="M21 12h4" />
    <path d="M21 17h4" />
    <path d="M3 7h-4" />
    <path d="M3 12h-4" />
    <path d="M3 17h-4" />
  </svg>
);

export const CodeIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const BriefcaseIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const RefreshIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export const LayersIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
    </svg>
);

export const ChatIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

export const SendIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export const ArrowUpRightIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M7 7h10v10" />
        <path d="M7 17L17 7" />
    </svg>
);

export const ShieldIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m6 9 6 6 6-6"/>
    </svg>
);

export const GlobeIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const SmartphoneIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);

// --- BRAND ICONS ---

export const OpenAIIcon: React.FC<{ className?: string }> = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.0462 6.0462 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1195 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4533l-.142.0805L8.704 5.4596a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l3.1028-1.7999 3.1028 1.7999v3.5911l-3.1028 1.7999-3.1028-1.7999z" />
  </svg>
);

export const GoogleIcon: React.FC<{ className?: string }> = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

export const AnthropicIcon: React.FC<{ className?: string }> = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
     <path d="M12 2L2 22h20L12 2zm0 6L7 17h10L12 8z" />
  </svg>
);

export const MetaIcon: React.FC<{ className?: string }> = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 12c0 2.5 1.9 4.5 4.5 4.5s4.5-2.05 4.5-4.5c0-1.65-.9-3.05-2.25-3.85C19.3 7.7 19.85 7.5 20.4 7.5c2.55 0 4.6 2.05 4.6 4.5s-2.05 4.5-4.6 4.5c-2.1 0-3.95-1.4-4.45-3.35-.05-.2-.35-.2-.4 0-.5 1.95-2.35 3.35-4.45 3.35-2.55 0-4.6-2.05-4.6-4.5s2.05-4.5 4.6-4.5c.55 0 1.1.2 1.65.65-1.35.8-2.25 2.2-2.25 3.85 0 2.45 2 4.5 4.5 4.5zM3 12c0-2.45 2.05-4.5 4.6-4.5 2.1 0 3.95 1.4 4.45 3.35.05.2.35.2.4 0 .5-1.95 2.35-3.35 4.45-3.35 2.55 0 4.6 2.05 4.6 4.5s-2.05 4.5-4.6 4.5c-.55 0-1.1-.2-1.65-.65 1.35-.8 2.25-2.2 2.25-3.85 0-2.45-2-4.5-4.5-4.5S3 9.55 3 12z" />
  </svg>
);

export const MistralIcon: React.FC<{ className?: string }> = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.5 21V3h4l4.5 9 4.5-9h4v18h-4V9l-4.5 9-4.5-9v12z" />
  </svg>
);

export const XAIIcon: React.FC<{ className?: string }> = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const DeepSeekIcon: React.FC<{ className?: string }> = (props) => (
   <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
     <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
     <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
     <path d="M12 8v8" />
     <path d="M8 12h8" />
   </svg>
);

export const AlibabaIcon: React.FC<{ className?: string }> = (props) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-10h2v8h-2z"/>
    </svg>
);
