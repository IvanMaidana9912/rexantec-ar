import {
  Navbar,
  Hero,
  Footer,
} from '../../components';
import Gallery, { ImagesArray } from '@/components/Gallery';

const IMAGE_SRC: ImagesArray[] = [
  { SrcI: 'https://i.imgur.com/Dx92bWn.jpeg', AltI: 'P01' },
  { SrcI: 'https://i.imgur.com/qkQ9SEJ.jpeg', AltI: 'P02' },
  { SrcI: 'https://i.imgur.com/X5RSvyo.jpeg', AltI: 'P03' },
  { SrcI: 'https://i.imgur.com/W48tlZV.jpeg', AltI: 'P04' },
  { SrcI: 'https://i.imgur.com/NQkK8Th.jpeg', AltI: 'P05' },
  { SrcI: 'https://i.imgur.com/uljRK8k.jpeg', AltI: 'P06' },
  { SrcI: 'https://i.imgur.com/Dmi3k1T.jpeg', AltI: 'P07' },
  { SrcI: 'https://i.imgur.com/OMpmtBr.jpeg', AltI: 'P08' },
  { SrcI: 'https://i.imgur.com/orsWsol.jpeg', AltI: 'P09' },
  { SrcI: 'https://i.imgur.com/yvgZJ4g.jpeg', AltI: 'P10' },
  { SrcI: 'https://i.imgur.com/17SSh0J.jpeg', AltI: 'P11' },
  { SrcI: 'https://i.imgur.com/QQcR3E9.jpeg', AltI: 'P12' },
  { SrcI: 'https://i.imgur.com/TxbFjiZ.jpeg', AltI: 'P13' },
  { SrcI: 'https://i.imgur.com/lyK7TgR.jpeg', AltI: 'P14' },
  { SrcI: 'https://i.imgur.com/jskBkPD.jpeg', AltI: 'P15' },
  { SrcI: 'https://i.imgur.com/HpgmZNI.jpeg', AltI: 'P16' },
  { SrcI: 'https://i.imgur.com/TF1j4M4.jpeg', AltI: 'P17' },
  { SrcI: 'https://i.imgur.com/o1ZjXr7.jpeg', AltI: 'P18' },
  { SrcI: 'https://i.imgur.com/hq9SnEN.jpeg', AltI: 'P19' },
  { SrcI: 'https://i.imgur.com/doCCNEv.jpeg', AltI: 'P20' },
  { SrcI: 'https://i.imgur.com/smwFqwl.jpeg', AltI: 'P21' },
  { SrcI: 'https://i.imgur.com/qTwucpw.jpeg', AltI: 'P22' },
  { SrcI: 'https://i.imgur.com/NCXvd2O.jpeg', AltI: 'P23' },
  { SrcI: 'https://i.imgur.com/nR5tzMX.jpeg', AltI: 'P24' },
  { SrcI: 'https://i.imgur.com/SCZnoDn.jpeg', AltI: 'P25' },
  { SrcI: 'https://i.imgur.com/9ydkT9I.jpeg', AltI: 'P26' },
  { SrcI: 'https://i.imgur.com/0RGC6xx.jpeg', AltI: 'P27' },
  { SrcI: 'https://i.imgur.com/WsS5CuT.jpeg', AltI: 'P28' },
  { SrcI: 'https://i.imgur.com/e164EAm.jpeg', AltI: 'P29' },
  { SrcI: 'https://i.imgur.com/9VC5Fg5.jpeg', AltI: 'P30' },
  { SrcI: 'https://i.imgur.com/Rs6D95l.jpeg', AltI: 'P31' },
  { SrcI: 'https://i.imgur.com/qONqcnB.jpeg', AltI: 'P32' },
  { SrcI: 'https://i.imgur.com/iOcwLpQ.jpeg', AltI: 'P33' },
  { SrcI: 'https://i.imgur.com/vewGh68.jpeg', AltI: 'P34' },
  { SrcI: 'https://i.imgur.com/FrZOqRO.jpeg', AltI: 'P35' },
  { SrcI: 'https://i.imgur.com/6BHnYmV.jpeg', AltI: 'P36' },
  { SrcI: 'https://i.imgur.com/Xj5wq5E.jpeg', AltI: 'P37' },
  { SrcI: 'https://i.imgur.com/fJsK3zT.jpeg', AltI: 'P38' },
  { SrcI: 'https://i.imgur.com/BCxTnxI.jpeg', AltI: 'P39' },
  { SrcI: 'https://i.imgur.com/adBwWro.jpeg', AltI: 'P40' },
  { SrcI: 'https://i.imgur.com/L4Uo6Mt.jpeg', AltI: 'P41' },
  { SrcI: 'https://i.imgur.com/npg1jRb.jpeg', AltI: 'P42' },
  { SrcI: 'https://i.imgur.com/X9vp1Li.jpeg', AltI: 'P43' },
  { SrcI: 'https://i.imgur.com/e2U8dMC.jpeg', AltI: 'P44' },
  { SrcI: 'https://i.imgur.com/LTHrt25.jpeg', AltI: 'P45' },
  { SrcI: 'https://i.imgur.com/3xgZVbH.jpeg', AltI: 'P46' },
  { SrcI: 'https://i.imgur.com/GNKMEOM.jpeg', AltI: 'P47' },
  { SrcI: 'https://i.imgur.com/BG71M4Y.jpeg', AltI: 'P48' },
  { SrcI: 'https://i.imgur.com/qFdTArd.jpeg', AltI: 'P49' },
  { SrcI: 'https://i.imgur.com/W8zpIBe.jpeg', AltI: 'P50' },
  { SrcI: 'https://i.imgur.com/xVtjLmQ.jpeg', AltI: 'P51' },
  { SrcI: 'https://i.imgur.com/Zw6FcIc.jpeg', AltI: 'P52' },
  { SrcI: 'https://i.imgur.com/QlLnQRT.jpeg', AltI: 'P53' },
  { SrcI: 'https://i.imgur.com/qL3iNO1.jpeg', AltI: 'P54' },
  { SrcI: 'https://i.imgur.com/hjsH5Cj.jpeg', AltI: 'P55' },
  { SrcI: 'https://i.imgur.com/4S9uTXF.jpeg', AltI: 'P56' },
  { SrcI: 'https://i.imgur.com/k6GQUvG.jpeg', AltI: 'P57' },
  { SrcI: 'https://i.imgur.com/ZNA9a19.jpeg', AltI: 'P58' },
  { SrcI: 'https://i.imgur.com/unILAQe.jpeg', AltI: 'P59' },
  { SrcI: 'https://i.imgur.com/8pOyPI1.jpeg', AltI: 'P60' },
  { SrcI: 'https://i.imgur.com/ngM1mGo.jpeg', AltI: 'P61' },
  { SrcI: 'https://i.imgur.com/jfKN1hz.jpeg', AltI: 'P62' },
  { SrcI: 'https://i.imgur.com/KKDcspb.jpeg', AltI: 'P63' },
  { SrcI: 'https://i.imgur.com/QR9ps4H.jpeg', AltI: 'P64' },
  { SrcI: 'https://i.imgur.com/APEshY7.jpeg', AltI: 'P65' },
  { SrcI: 'https://i.imgur.com/GnpaC22.jpeg', AltI: 'P66' },
];


export default function Home() {
  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero imgHREF='https://i.imgur.com/K89bY0o.jpeg' />
        <Gallery images={IMAGE_SRC} />
        <Footer />
      </main>
    </>
  );
}
