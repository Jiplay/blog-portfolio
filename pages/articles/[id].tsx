import React from 'react';
import MarkdownRenderer from '@/components/MarkDownRenderer';

const App: React.FC = () => {
  const markdownText = `
  # Halloween 2069: Plongez dans un Futur Sombre et Technologique

  *Par ChatGPT*
  
  ![Image](https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/news-de-la-redaction/comment-sculpter-une-citrouille-2855656/51365946-22-fre-FR/Comment-sculpter-une-citrouille-pour-Halloween.jpg)
  
  L'Halloween de 2069 approche à grands pas, et cette année s'annonce plus spectaculaire que jamais. Avec l'avancée constante de la technologie, cette fête autrefois associée à la peur et aux superstitions prend une tournure futuriste à couper le souffle. Découvrez ce que nous réserve cette soirée d'Halloween en 2069, où la technologie et l'imaginaire se mélangent pour créer une expérience inoubliable.
  
  ## Un Déguisement 2.0
  
  Les costumes d'Halloween ne sont plus ce qu'ils étaient. En 2069, les déguisements ont atteint un tout autre niveau grâce à la réalité augmentée et à la projection holographique. Les enfants et les adultes peuvent désormais se transformer en créatures terrifiantes ou en super-héros grâce à des costumes qui projettent des illusions visuelles incroyables. Il n'est plus nécessaire de se maquiller ou de porter des masques inconfortables ; il suffit de télécharger l'application de costume virtuel de votre choix pour entrer dans la peau de votre personnage préféré.
  
  ## Les Bonbons du Futur
  
  Adieu les traditionnels bonbons emballés dans du plastique. En 2069, les bonbons sont produits de manière durable et respectueuse de l'environnement. Les imprimantes 3D à domicile permettent de créer des friandises personnalisées en forme de monstres, de robots ou de tout ce que l'imagination peut concevoir. De plus, ces bonbons sont non seulement délicieux, mais aussi riches en nutriments essentiels pour la santé. La technologie a donc transformé les bonbons d'Halloween en une expérience à la fois savoureuse et bénéfique pour tous.
  
  ## Les Maisons Hantées du Futur
  
  Les maisons hantées traditionnelles sont devenues obsolètes face aux avancées de la réalité virtuelle. En 2069, vous n'avez plus besoin de vous rendre dans une vieille demeure lugubre pour ressentir la peur. Les maisons hantées du futur sont des environnements virtuels totalement immersifs, créés avec des casques de réalité virtuelle de pointe. Vous pouvez explorer des mondes cauchemardesques peuplés de fantômes, de monstres et de mystères à résoudre, le tout depuis le confort de votre foyer.
  
  ## Le Ciel d'Halloween
  
  Le clou du spectacle d'Halloween en 2069 est le spectacle céleste annuel. Grâce à la technologie de drones synchronisés, le ciel nocturne se transforme en une toile vivante de lumières et de formes étranges. Les équipes de drones rivalisent pour créer les affichages les plus créatifs et les plus effrayants. Vous pourrez admirer des créatures géantes volantes, des constellations ensorcelées et des feux d'artifice numériques époustouflants dans un spectacle qui éblouira et effrayera à la fois.
  
  ## Halloween en 2069 : Un Mélange de Tradition et de Technologie
  
  L'Halloween de 2069 est un exemple parfait de la manière dont la technologie peut améliorer et transformer nos traditions les plus anciennes. Les déguisements, les bonbons, les maisons hantées et les spectacles célestes ont tous bénéficié de l'innovation technologique, offrant une expérience plus immersive et divertissante que jamais.
  
  Alors, que vous soyez un adepte des nouvelles technologies ou un amoureux des traditions d'Halloween, il y en a pour tous les goûts en 2069. Préparez-vous à plonger dans un futur sombre et technologique où l'imagination n'a pas de limites, et où la fête d'Halloween devient une expérience inoubliable.
  
  Que votre Halloween 2069 soit effrayant, amusant et rempli de sucreries technologiques ! 🎃👻🚀
  `;

  return (
    <div>
      <MarkdownRenderer source={markdownText} />
    </div>
  );
};

export default App;
