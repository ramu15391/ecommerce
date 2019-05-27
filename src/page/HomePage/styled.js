import styled from 'styled-components';

const MainSection = styled.section`
    display: flex;
    flex: 0 0 100%;
    flex-wrap: wrap;
`
const HeaderElement = styled.header.attrs({
    className: 'header'
})`
    background: lightsalmon;
    display: flex;
    flex: 0 0 100%;
    justify-content: center;
    padding: 1rem;
`

const MainWrapper = styled.main`
    display: flex;
    flex: 0 0 100%;
    background: lightblue;
    flex-wrap: wrap;

    a {
        flex: 0 0 50%;
    }

    ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
`

export { HeaderElement, MainWrapper, MainSection}