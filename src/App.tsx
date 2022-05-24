

import { SlideShow } from './Components/SlideShow';
import { Header } from './Components/Header';
import { GlobalStyle } from './Styles/global';
import { TemplatInformativo } from './Components/TemplatInformativo';
import { GaleriaImg } from './Components/GaleriaImg';
import { TextMidia } from './Components/TextMida';
import { MidiaSocial } from './Components/MidiaSocial';




export function App() {
  return (
    <>
      <Header />
      <SlideShow />
      <TemplatInformativo />
      <GaleriaImg />
      <TextMidia />
      <MidiaSocial />

      <GlobalStyle />
    </>
  );
}


