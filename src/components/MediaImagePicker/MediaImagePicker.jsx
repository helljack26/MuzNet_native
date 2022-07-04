import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

import { View, Text } from 'react-native';
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Variables
import C from '@/res/colors'
// Images
import IMAGES from '@/res/images'
const {
    TrashWhiteIcon,
    AddCrossIcon
} = IMAGES;
// Styles
import { style } from './style'

const {
    MediaContainer,
    MediaContainerTitle,
    MediaContainerSubTitle,
    MediaBlock,
    MediaImg,
    MediaImgBlock,
    MediaDeleteButton,
    MediaImgAddButton,
    MediaImgAddButtonText,
} = style;

const MediaImagePicker = ({ userImages, setNewUserImages, isAdCreateOrEdit }) => {

    const { windowHeight, windowWidth } = getWindowDimension()
    const imageBlockSize = (windowWidth - 56) / 3
    // Hide button for ad if already added 4 image
    const [isHideAddButton, setHideAddButton] = useState(false);

    //New user image handler 
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
        const newImage = {
            uri: result.uri
        }

        if (!result.cancelled) {
            setNewUserImages([...userImages, newImage])
        }
    };

    const removeImage = (removedId) => {
        const filteredImages = userImages.filter((item, id) => id !== removedId)
        setNewUserImages(filteredImages)
    }

    useEffect(() => {
        if (userImages.length === 4 && isAdCreateOrEdit === true) {
            setHideAddButton(true)
        } else {
            setHideAddButton(false)
        }
    }, [userImages, isAdCreateOrEdit]);
    return (
        <MediaContainer>
            <MediaContainerTitle>
                Media
            </MediaContainerTitle>

            {isAdCreateOrEdit === true && <MediaContainerSubTitle>
                You can upload up to 4 photos
            </MediaContainerSubTitle>}

            <MediaBlock>

                {userImages.map((image, id) => {
                    const imageSource = image.uri !== undefined ? { uri: image.uri } : image
                    const isFirstImage = id === 0 && !isAdCreateOrEdit
                    return (
                        <MediaImgBlock
                            key={id}
                            style={{
                                width: imageBlockSize,
                                height: imageBlockSize,
                            }}
                        >
                            <MediaImg source={imageSource} resizeMode={'cover'} />

                            {!isFirstImage && <MediaDeleteButton
                                onPress={() => {
                                    removeImage(id)
                                }}
                            >
                                <TrashWhiteIcon width={17} height={17} />
                            </MediaDeleteButton>}
                        </MediaImgBlock>
                    )
                })}

                {/* // Hide button for ad if already added 4 image */}
                {!isHideAddButton && <MediaImgAddButton
                    style={{
                        width: imageBlockSize,
                        height: imageBlockSize,
                    }}
                    onPress={pickImage}
                >

                    <AddCrossIcon width={17} height={17} />
                    <MediaImgAddButtonText>
                        Add new
                    </MediaImgAddButtonText>
                </MediaImgAddButton>
                }
            </MediaBlock>

        </MediaContainer>

    );

}

export default MediaImagePicker;