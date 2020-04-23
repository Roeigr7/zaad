import React from 'react'
import { PageLayout,AboutContainer,BoxContent,FormTitle, H4Link } from '../style/style';
import { aboutText } from "../utilities/constAccessories";
import CustomersSlider from '../components/features/CustomersSlider';
const aboutPage = () => {
    return (
<PageLayout>
  <BoxContent big>
      <FormTitle>מי אנחנו אולפני צעד</FormTitle>  </BoxContent>  
<AboutContainer>
{aboutText}

</AboutContainer>
<H4Link to='/customers'>מיטב לקוחותינו</H4Link>
<CustomersSlider dots={false} rows={1}/>
           </PageLayout>
    )
}
export default aboutPage;