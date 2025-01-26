import styled from 'styled-components'
import { Screen } from '@/utils/styles/globals'

export const GeneratorScreen = styled(Screen)`
  display: flex;
  align-items: center;
  padding: 0 20px;

  background-color: #d8d8d8;
`

export const GeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: fit-content;
  padding-bottom: 280px;
  margin-top: 80px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: white;
`

export const ContainerHeader = styled.div`
  display: flex;
  padding: 20px;

  font-size: 22px;
  line-height: 22px;
  font-weight: 300;

  color: white;
  background-color: #43648f;
`

export const ContainerSubHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  padding: 20px;
  padding-bottom: 30px;
  margin-bottom: 15px;

  border-bottom: 2px solid #ececec;

  p,
  b {
    font-size: 14px;
    line-height: 14px;
  }

  b {
    font-weight: 500;

    color: #47484f;
  }

  p {
    font-weight: 400;

    color: #b7b7b7;
  }

  h1 {
    margin-top: 10px;

    font-size: 22px;
    line-height: 22px;
    font-weight: 600;
    text-transform: uppercase;

    color: #43648f;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  border-radius: 2px;
  padding: 35px 20px 30px 20px;
  margin: 0 20px;

  background-color: #e2e6ef;

  img {
    width: 60px;
  }

  span {
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
    text-align: center;

    color: #47484f;
  }

  b {
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    text-align: center;

    color: #43648f;
  }

  p {
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
    text-align: center;

    color: #47484f;
  }
`

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  padding: 20px;

  p {
    color: #47484f;
  }

  a {
    margin-top: 10px;

    font-size: 15px;
    line-height: 15px;
    font-weight: 400;
    text-decoration: underline;

    color: rgb(60, 144, 246);
  }
`

export const ContainerFooterVacancies = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  padding: 15px 20px;
  border-top: 2px solid #ececec;
  border-bottom: 2px solid #ececec;

  img {
    width: 40px;
  }

  p {
    font-size: 15px;
    line-height: 15px;
    font-weight: 400;

    b {
      font-weight: 600;

      color: #43648f;
    }
  }
`

export const GeneratorFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  width: 100%;
  padding: 20px;

  background-color: #efefef;
  border-top: 2px solid #469afe;

  svg {
    font-size: 24px;
    color: black;
  }

  color: #47484f;
`
