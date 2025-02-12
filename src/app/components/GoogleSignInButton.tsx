import Image from 'next/image'

interface GoogleSignInButtonProps {
  onClick: () => void
}

export default function GoogleSignInButton({ onClick }: GoogleSignInButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full max-w-xs flex items-center justify-center gap-3 bg-white text-gray-700 px-4 py-3 text-sm font-medium rounded-md border hover:bg-gray-50 transition-colors"
    >
      <Image 
        src="/google-icon.svg"
        alt="Google" 
        width={18} 
        height={18}
        className="w-5 h-5"
      />
      <span>Sign in with Google</span>
    </button>
  )
} 