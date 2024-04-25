import LiveShoppingScript from "./LiveShopping"
import fastStoreConfig from "../../faststore.config"

const ACCOUNT = fastStoreConfig.api.storeId; 

const ThirdPartyScripts = () => {
    return (
      <LiveShoppingScript id="99c86792-87b4-4b5b-b965-acc016819d6c" account={ACCOUNT}/>
    )
  }
  
  export default ThirdPartyScripts