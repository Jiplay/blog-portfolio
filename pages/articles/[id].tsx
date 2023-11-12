import React, { useEffect } from 'react';
import MarkdownRenderer from '@/components/MarkDownRenderer';
import style from "@/styles/style.module.css"
import { useRouter } from "next/router";
import Image from 'next/image';
import ColorSchemesExample from '@/components/NavBar';

interface MDReaderProps {
  path: string
}

const MDReader: React.FC<MDReaderProps> = ({ path }) => {
  const router = useRouter();
  const { id } = router.query;  // FIXME

  useEffect(() => {
    // Faites quelque chose si id change ici.
  }, [id]);


  return (
    <div className={style.gradientBackground}>
        <ColorSchemesExample />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: '50%' }}>
      {/* <div style={{ position: 'relative', borderRadius: '50%' }}>
        <Image
          src="/img/banner.jpg"
          alt="Your Name"
          width={300}
          height={300}
          layout="fixed"
          objectFit="cover"
          style={{ borderRadius: '50%', marginBottom: '3%', marginTop: '3%'}}
        />
      </div> */}
    </div>
    {id !== undefined ? <MarkdownRenderer source={`/articles/${id}.MD`} /> : null}
    </div>
  );
};

export default MDReader;
