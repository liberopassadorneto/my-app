import React from "react";
import Icon1 from "../../images/youtube-tutorial.svg";
import Icon2 from "../../images/upgrade.svg";
import Icon3 from "../../images/svg-1.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ItemList,
} from "./ServicesCopyElements";

function Services() {
  return (
    <>
      <ServicesContainer id="content">
        <ServicesH1>Contenido del curso</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Clase 1 • 25/04</ServicesH2>
            <ItemList>
              <ServicesP>
                Ventajas y Aplicaciones de la Ortodoncia Lingual
              </ServicesP>
              <ServicesP>Sistema Lingual Arco-Recto</ServicesP>
              <ServicesP>Agulación y Torque de los Brackets</ServicesP>
            </ItemList>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Clase 2 • 02/05</ServicesH2>
            <ItemList>
              <ServicesP>Perfil de los Brackets</ServicesP>
              <ServicesP>Sistemas de Montaje de Laboratorio</ServicesP>
              <ServicesP>Prieto Six Plus</ServicesP>
            </ItemList>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Clase 3 • 09/05</ServicesH2>
            <ItemList>
              <ServicesP>Confección de la Cubeta de Transferencia</ServicesP>
              <ServicesP>Pegado de los Brackets en la Boca</ServicesP>
              <ServicesP>Ligación del Primer Arco</ServicesP>
            </ItemList>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
      <ServicesContainer id="content">
        {/* <ServicesH1>{heading}</ServicesH1> */}
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Clase 4 • 16/05</ServicesH2>
            <ItemList>
              <ServicesP>Instrumentales en Ortodoncia Lingual</ServicesP>
              <ServicesP>Diagrama Lingual Prieto y Arcos Linguales</ServicesP>
              <ServicesP>Secuencia de los Arcos</ServicesP>
            </ItemList>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Clase 5 • 23/05</ServicesH2>
            <ItemList>
              <ServicesP>Casos Clínicos a Respecto de los Diagramas</ServicesP>
              <ServicesP>Nivelamiento y Alineamiento</ServicesP>
              <ServicesP>Controle de Curvas de Spee en los Arcos</ServicesP>
            </ItemList>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Clase 6 • 16/05</ServicesH2>
            <ItemList>
              <ServicesP>Presentación de Casos Clínicos</ServicesP>
              <ServicesP>Repegado de Brackets</ServicesP>
              <ServicesP>Biomecánica Básicas</ServicesP>
            </ItemList>
          </ServicesCard>
        </ServicesWrapper>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Clase 4 • 16/05</ServicesH2>
            <ItemList>
              <ServicesP>Instrumentales en Ortodoncia Lingual</ServicesP>
              <ServicesP>Diagrama Lingual Prieto y Arcos Linguales</ServicesP>
              <ServicesP>Secuencia de los Arcos</ServicesP>
            </ItemList>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Clase 5 • 23/05</ServicesH2>
            <ItemList>
              <ServicesP>Casos Clínicos a Respecto de los Diagramas</ServicesP>
              <ServicesP>Nivelamiento y Alineamiento</ServicesP>
              <ServicesP>Controle de Curvas de Spee en los Arcos</ServicesP>
            </ItemList>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Clase 6 • 16/05</ServicesH2>
            <ItemList>
              <ServicesP>Presentación de Casos Clínicos</ServicesP>
              <ServicesP>Repegado de Brackets</ServicesP>
              <ServicesP>Biomecánica Básicas</ServicesP>
            </ItemList>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default Services;
