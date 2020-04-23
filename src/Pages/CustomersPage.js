import React from 'react'
import { PageLayout,BoxContent,FormTitle } from '../style/style';

import CustomersSlider from '../components/features/CustomersSlider';
const CustomersPage = () => {
    return (
<PageLayout>
  <BoxContent style={{marginBottom:'15px'}} big>
      <FormTitle >מיטב לקוחותינו</FormTitle>  </BoxContent>  

<CustomersSlider rows={2}/>
           </PageLayout>
    )
}
export default CustomersPage;