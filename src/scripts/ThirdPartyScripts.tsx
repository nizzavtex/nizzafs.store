import LiveShoppingScript from "./LiveShopping"
import fastStoreConfig from "../../faststore.config"

const ACCOUNT = fastStoreConfig.api.storeId; 

const ThirdPartyScripts = () => {
    return (
      <LiveShoppingScript id="dcdafb42-8913-46cf-b8b8-04f56ddc1ccd" account={ACCOUNT}/>
    )
  }
  
  export default ThirdPartyScripts