

import { SlideShow } from './Components/SlideShow';
import { Header } from './Components/Header';
import { GlobalStyle } from './Styles/global';
import { TemplatInformativo } from './Components/TemplatInformativo';
import { GaleriaImg } from './Components/GaleriaImg';
import { TextMidia } from './Components/TextMida';
import { MidiaSocial } from './Components/MidiaSocial';
import Accordion from './Components/Accordion';
import { ImgFooter } from './Components/ImgFooter';
import { Footer } from './Components/Footer';








export function App() {
  return (
    <>
      <Header />
      <SlideShow />
      <TemplatInformativo />
      <GaleriaImg />
      <TextMidia />
      <MidiaSocial />
      <Accordion />
      <ImgFooter />
      <Footer />
      <GlobalStyle />
    </>
  );
}


