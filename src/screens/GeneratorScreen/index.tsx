import * as S from './styles'

import { FiMenu } from 'react-icons/fi'

interface IGeneratorScreen {}

const GeneratorScreen = ({}: IGeneratorScreen) => {
  return (
    <S.GeneratorScreen>
      <S.GeneratorContainer>
        <S.ContainerHeader>1ª Opção de curso</S.ContainerHeader>
        <S.ContainerSubHeader>
          <b>Inscrição realizada em 12/06/2024 às 16h14.</b>
          <p>5c42d019ea12d08a864bc8b28944</p>
          <h1>Medicina</h1>
        </S.ContainerSubHeader>
        <S.ContainerContent>
          <img src="/medal.png" alt="Medicina" />
          <span>Parabéns</span>
          <b>Você foi selecionado na chamada regular.</b>
          <p>21º de 50 vagas para ampla concorrência</p>
        </S.ContainerContent>
        <S.ContainerFooter>
          <p>UFMA - UNIVERSIDADE FEDERAL DO MARANHÃO</p>
          <p>CIDADE UNIVERSITÁRIA (São Luís, MA)</p>
          <a href="" target="_blank">
            Acesse o site da instituição
          </a>
        </S.ContainerFooter>
        <S.ContainerFooterVacancies>
          <img src="/persons.png" alt="Medicina" />
          <p>
            <b>50 vagas</b> para ampla concorrência
          </p>
        </S.ContainerFooterVacancies>
      </S.GeneratorContainer>
      <S.GeneratorFooter>
        <FiMenu />
        Menu
      </S.GeneratorFooter>
    </S.GeneratorScreen>
  )
}

export default GeneratorScreen
