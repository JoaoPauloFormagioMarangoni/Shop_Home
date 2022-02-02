import backgroundAllImages from '../../assets/backgroundAllImages.svg'
import { ShareYourSetupContainer } from './styles';

export function ShareYourSetup() {
    return (
        <ShareYourSetupContainer>
            <p>Share your setup with</p>
            <h3>#FuniroFurniture</h3>
            <img src={backgroundAllImages} alt="your setup" />
        </ShareYourSetupContainer>
    );
}