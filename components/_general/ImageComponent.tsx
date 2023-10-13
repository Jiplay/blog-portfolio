import Image from 'next/image';

const MyImage = () => (
  <div style={{ display: 'flex', float: 'left', marginTop: '3%', marginBottom: '3%', marginLeft: '10px', marginRight: '3%' }}>
    <Image
      src="/img/banner.jpg"
      height={444}
      width={572}
      alt="Your Name"
    />
  </div>
);

export default MyImage