const Gallery = ({
  isSidebar,
  isMyImages,
}: {
  isSidebar?: boolean;
  isMyImages?: boolean;
}) => {
  return (
    <svg
      width={isSidebar ? "30" : "24"}
      height={isSidebar ? "30" : "24"}
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        fill={isMyImages ? "#E31221" : "white"}
        d="M170 160a6 6 0 1 0 0-12v12Zm-148-6h-6a6.002 6.002 0 0 0 6 6v-6Zm0-68v-6a6 6 0 0 0-6 6h6Zm154-48a6 6 0 1 0-12 0h12Zm-12 92a6 6 0 1 0 12 0h-12ZM22 38v-6a6 6 0 0 0-6 6h6Zm124 6a6 6 0 1 0 0-12v12ZM16 62a6 6 0 1 0 12 0H16Zm154 86H22v12h148v-12Zm-142 6V86H16v68h12ZM164 38v92h12V38h-12ZM22 44h124V32H22v12Zm-6-6v24h12V38H16Zm6 54c34.242 0 62 27.758 62 62h12c0-40.869-33.13-74-74-74v12Z"
      />
      <circle
        cx="132"
        cy="76"
        r="14"
        stroke={isMyImages ? "#E31221" : "white"}
        strokeWidth="12"
      />
    </svg>
  );
};

export default Gallery;
