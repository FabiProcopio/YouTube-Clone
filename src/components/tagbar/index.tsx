import { useState, useRef } from 'react';
import { 
    ButtonContainer,
    ButtonIcon,
    Buttonwrapper,
    TagBarContainer,
    TagButton,
    Tagwrapper
} from "./styles"; 
import NextIcon from '../../assets/next.png';
import PrevIcon from '../../assets/previous.png';


const videotags = [
    {tag: 'All'},
    {tag: 'Music'},
    {tag: 'Live'},
    {tag: 'Playlists'},
    {tag: 'Greates hits album'},
    {tag: 'Soundtrack'},
    {tag: 'Gaming'},
    {tag: 'Art'},
    {tag: 'Meditation Music'},
    {tag: 'Trending'},
    {tag: 'Sports'},
    {tag: 'News'},
    {tag: 'Chill-Out Music'},   
    {tag: 'Comedy'},   
    {tag: 'Podcast'},   
    {tag: 'Dance music'},    
]



function TagBar() {
    
    const [leftArrow, setLeftArrow] = useState(true);
    const [rightArrow, setRightArrow] = useState(false);
    const [selectedTag, setSelectedTag] = useState(videotags[0].tag);
    const tagBarContainerRef = useRef(null);

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag);
    }


    
    const handleArrowClick = (direction: string) => {
        const container = tagBarContainerRef.current as unknown as HTMLElement;
        if (container) {
          const containerWidth = container.offsetWidth;
          const scrollAmount = (direction === "left" ? -1 : 1) * containerWidth * 0.2;
          container.scrollLeft += scrollAmount;
      
          if (container.scrollLeft > 0) {
            setLeftArrow(true);
          } else {
            setLeftArrow(false);
          }
      
          if (container.scrollLeft >= container.scrollWidth - containerWidth) {
            setRightArrow(false);
          } else {
            setRightArrow(true);
          }
        }
      };
      
      
    return (
        <Tagwrapper leftArrow={leftArrow} rightArrow={rightArrow}>
            
            <Buttonwrapper id='leftarrow' onClick={() => handleArrowClick('left')}>
                <ButtonContainer>
                        <ButtonIcon alt="" src={PrevIcon} />
                </ButtonContainer>
            </Buttonwrapper>
            
            <TagBarContainer ref={tagBarContainerRef}>
                    {videotags.map((tag, index) => (
                        <TagButton key={index} selected={tag.tag === selectedTag} onClick={() => handleTagClick(tag.tag)}>
                            <span> {tag.tag} </span>
                        </TagButton>
                    ))}
            </TagBarContainer>
            
            <Buttonwrapper id='rightarrow' onClick={() => handleArrowClick('right')}>
                <ButtonContainer>
                    <ButtonIcon alt="" src={NextIcon} />
                </ButtonContainer>
            </Buttonwrapper>
            
        </Tagwrapper>
    )
}

export default TagBar;