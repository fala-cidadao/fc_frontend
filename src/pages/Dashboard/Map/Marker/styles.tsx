import styled from 'styled-components'
import { Popup } from 'react-leaflet';

export const StyledPopup = styled(Popup)`
    .leaflet-popup-content{
        height: 50px;
        width: 200px;
        padding: 10px;
        text-align: center;
        h3{
            margin-bottom: 10px;
        }
    }
    
`