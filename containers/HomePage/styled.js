import styled from 'styled-components';

const MainSection = styled.section`
    display: flex;
    flex: 0 0 100%;
`
const HeaderElement = styled.header.attrs({
    className: 'header'
})`
    background: blue;
`

const MainWrapper = styled.main`
    display: flex;
    flex: 0 0 100%;
    background: lightblue;
`

export { HeaderElement, MainWrapper, MainSection}