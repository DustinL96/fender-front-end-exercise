import React, { useState } from "react";
import styled from "styled-components";
import { BrokenImageOutlined } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import { Colors } from "../defs/Colors";

const ImageContainer = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${Colors.images.border};
    border-radius: 6px;
`;

const BrokenImage = styled(BrokenImageOutlined)`
    && {
        color: ${Colors.images.brokenImage};
        margin-bottom: 5px;
    }
`;

interface IProductImage {
    src: string | undefined;
    alt: string | undefined;
}

export default function ProductImage(props: IProductImage): JSX.Element {
    const [showError, setShowError] = useState<boolean>(false);

    return (
        <ImageContainer>
            {showError ? (
                <>
                    <BrokenImage fontSize="large" />
                    <Typography variant="body2">Image Failed To Load</Typography>
                </>
            ) : (
                <img
                    width={300}
                    height={200}
                    src={props.src}
                    alt={props.alt}
                    onError={(): void => setShowError(true)}
                />
            )}
        </ImageContainer>
    );
}
