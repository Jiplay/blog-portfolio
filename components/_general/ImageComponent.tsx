import Image from 'next/image';

const MyImage = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%', marginBottom: '3%' }}>
    <Image
      src="/img/banner.jpg" // Route of the image file
      height={444} // Desired size with correct aspect ratio
      width={572} // Desired size with correct aspect ratio
      alt="Your Name"
      />
  </div>
);

export default MyImage