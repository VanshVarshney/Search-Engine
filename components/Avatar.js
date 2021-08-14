import Image from 'next/image';
function Avatar({ url, className }) {
  return (
    <Image
      src={url}
      loading="lazy"
      className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-50 ${className} `}
      alt="pic"
      height={50}
      width={50}
    />
  );
}

export default Avatar;
