export default function QuestIcon() {
  return (
    <svg
      width="28"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="hover:cursor-pointer hover:fill-neoBrandTertiary transition-all"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" className="dark:fill-fillicon dark:hover:fill-neoBrandTertiary transition-all" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C11.6 8 8 11.6 8 16C8 20.4 11.6 24 16 24C20.4 24 24 20.4 24 16C24 11.6 20.4 8 16 8ZM16 20C15.4 20 15 19.6 15 19C15 18.4 15.4 18 16 18C16.6 18 17 18.4 17 19C17 19.6 16.6 20 16 20ZM15 17H17V12H15V17Z"
        className="dark:fill-white fill-lighticon"
      />
    </svg>
  );
}
