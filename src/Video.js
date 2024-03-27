import React from 'react';
import styled from 'styled-components';

// Styled components
const Wrapper = styled.div`
  /* Resets */
  * { 
    box-sizing: border-box; 
  }
  body { 
    padding: 0; 
    margin: 0; 
  }
`;

const BeforeDiv = styled.div`
  /* Add your styles for .befor here */
`;

const VideoWrapper = styled.div`
  /* Fullscreen */
  height: 70vh;

  /* Make this the container for video positioning */
  position: relative;
`;

const BackgroundVideo = styled.video`
  /* Make it stick to all container edges */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;

  /* Make the video large enough to cover available space */
  /* Works for images too */
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit */
  object-fit: cover;
`;

const ContentDiv = styled.div`
  position: relative; /* All this does is allow it to be on top */
  height: 100%; /* Use full container height for centering, vs just height of this content */

  /* Center everything */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
color:white;
  /* Minimum edge space, mostly for logo */
  padding: 24px;
`;

const LogoImage = styled.img`
  margin-bottom: 1.5em; /* space without the <br> */
`;

// React component
function VideoComponent() {
  return (
    <Wrapper>
      <VideoWrapper>
        <BackgroundVideo autoPlay muted loop poster="https://cyphers-thecyphersagency.netdna-ssl.com/wp-content/uploads/2016/10/web-texture.jpg">
          <source src="https://www.infiiloom.com/wp-content/themes/Infiiloom/images/Infiiloom_Video_20_sec_mobile.mp4" type="video/mp4"/>
        </BackgroundVideo>
        <ContentDiv>
          <h2>Great advertising begins with the creation of a powerful brand.</h2>
          <p><strong>advertising | direct marketing | public relations<br/>
              media planning | market research | social media marketing | online marketing</strong></p>
        </ContentDiv>
      </VideoWrapper>
    </Wrapper>
  );
}

export default VideoComponent;
