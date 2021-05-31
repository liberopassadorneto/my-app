import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-1.svg";
import Icon3 from "../../images/svg-1.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

function Services({ heading, title }) {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Contenido del curso</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Clase 1 • 01/05</ServicesH2>
          <ServicesP>
            Ventajas y Aplicaciones de la Ortodoncia Lingual
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Clase 2 • 02/05</ServicesH2>
          <ServicesP>Agulación y Torque de los Brackets</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Clase 3 • 09/05</ServicesH2>
          <ServicesP>Confección de la Cubeta de Transferencia</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
