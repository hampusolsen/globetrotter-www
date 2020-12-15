import { useAtom } from "jotai";
import React, { useCallback, useState } from "react";
import { useThrottle } from "../../../../../../../resources/util/hooks";
import { setHappeningAction } from "../../../../../../../store/map/map.actions";
import { mapReducerAtom } from "../../../../../../../store/map/map.state";
import { HappeningMarker } from "../../../../../../../store/types.state";
import Text from "../../../../../../common/Text";
import Modal from "../../../../../../common/wrappers/Modal";
import ProfilePicture from "../../../../../../modules/ProfilePicture/ProfilePicture.module";
import {
  Background,
  Card,
  Carousel,
  Content,
  Footer,
  Title,
  Wrapper
} from "./HappeningInfo.styled";

const defaultDescripion = "No description available.";

const HappeningInfo: React.FC<{ happening: HappeningMarker }> = ({
  happening
}) => {
  const [, mapDispatch] = useAtom(mapReducerAtom);
  const [carouselActive, setCarouselActive] = useState(false);
  const [translatePercent, setTranslatePercent] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [prevX, setPrevX] = useState<number>();
  const throttledTranslatePercent = useThrottle(translatePercent, 50);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent): void => {
      if (!carouselActive) return;
      setPrevX(e.targetTouches[0].clientX);
    },
    [carouselActive]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent): void => {
      if (!carouselActive || !prevX) return;

      const currentX = e.targetTouches[0].clientX;
      const translation =
        (Math.abs(prevX - currentX) / window.innerWidth) * 100;

      if (currentX < prevX && activeImageIndex < happening.images.length - 1) {
        setTranslatePercent(translation);
      } else if (currentX > prevX) {
        setTranslatePercent(-translation);
      }
    },
    [activeImageIndex, carouselActive, happening.images.length, prevX]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent): void => {
      e.persist();

      if (!carouselActive || !prevX) return;

      const endX = e.changedTouches[0].clientX;
      const maxIndex = happening.images.length - 1;
      const leftSwipe = prevX < endX;
      const rightSwipe = prevX > endX;
      const shouldSwipe = Math.abs(endX - prevX) > 100;

      if (shouldSwipe && leftSwipe && activeImageIndex > 0) {
        setActiveImageIndex((idx) => idx - 1);
      } else if (shouldSwipe && rightSwipe && activeImageIndex < maxIndex) {
        setActiveImageIndex((idx) => idx + 1);
      }

      setTranslatePercent(0);
    },
    [activeImageIndex, carouselActive, happening.images.length, prevX]
  );

  return (
    <Modal>
      <Background onClick={() => mapDispatch(setHappeningAction())}>
        <Wrapper onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          <Card active={carouselActive}>
            {happening.images.length && (
              <Carousel
                active={carouselActive}
                translation={throttledTranslatePercent + activeImageIndex * 100}
                onClick={() => setCarouselActive(!carouselActive)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <Text>
                  {`${activeImageIndex + 1}/${happening.images.length}`}
                </Text>
                <div>
                  {happening.images.map((image) => (
                    <img key={image} src={image} alt="happening" />
                  ))}
                </div>
              </Carousel>
            )}
            <Content>
              <Title>
                <Text heading bold>
                  {happening.title}
                </Text>
                <Text italic>{happening.date.toLocaleDateString()}</Text>
              </Title>
              <Text italic={!happening.description}>
                {happening.description || defaultDescripion}
              </Text>
            </Content>
            <Footer>
              <Text heading bold>
                {happening.authorName}
              </Text>
              <ProfilePicture size="small" source={happening.authorPic} />
            </Footer>
          </Card>
        </Wrapper>
      </Background>
    </Modal>
  );
};

export default React.memo(HappeningInfo);
