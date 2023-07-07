import React, {FC, memo, useState} from 'react';
import {LayoutChangeEvent, Image as ReactImage, View} from 'react-native';

export interface ImageProps {
  url: string | undefined;
  containerStyle?: {[key: string]: any};
  imageStyle?: {[key: string]: any};
  testID?: string;
}

// @ts-ignore
const Image: FC<ImageProps> = ({url, containerStyle, imageStyle, testID}) => {
  const [style, setStyle] = useState<{width: number; height: number}>({
    width: 0,
    height: 0,
  });

  if (!url) {
    return;
  }

  const onLayout = async (event: LayoutChangeEvent) => {
    const {width: containerWidth} = event.nativeEvent.layout;
    const ok = await checkURL();

    ok &&
      ReactImage.getSize(url, (width, height) => {
        if (containerWidth < width) {
          setStyle({
            width: containerWidth,
            height: containerWidth / (width / height),
          });
        } else {
          setStyle({width, height});
        }
      });
  };

  const checkURL = async () => {
    try {
      const res = await fetch(url);
      return res.ok;
    } catch (error) {
      return false;
    }
  };

  return (
    <View testID={testID} style={containerStyle} onLayout={onLayout}>
      <ReactImage source={{uri: url}} style={[style, imageStyle]} />
    </View>
  );
};

export default memo(Image);
