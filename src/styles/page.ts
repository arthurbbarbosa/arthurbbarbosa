import styled from '@emotion/styled'

export const Wrapper = styled.section`
  height: 100vh;

  display: grid;
  place-items: center;
  text-align: center;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`

export const Technologies = styled.div`
  width: 100%;
  max-width: 844px;
  height: 104px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px 70px;

  margin-top: 10px;
`

export const Technology = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  cursor: pointer;
`

export const TechnologyName = styled.span`
  margin-top: -1px;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Socials = styled.div`
  width: 100%;
  max-width: 844px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;

  margin-top: 10px;
`

export const Social = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: 70px;

  margin-bottom: -27px;
`

export const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 40px;
  line-height: 0;
`

export const Description = styled.p`
  width: 100%;
  max-width: 800px;
  font-size: 25px;
`

export const Plus = styled.span`
  font-size: 50px;
  cursor: pointer;
`
