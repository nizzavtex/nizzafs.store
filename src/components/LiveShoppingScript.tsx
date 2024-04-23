import fastStoreConfig from "../../faststore.config"

const ACCOUNT = fastStoreConfig.api.storeId;

export interface LiveShoppingScriptProps {
  id: string
}

export default function LiveShoppingScript(props: LiveShoppingScriptProps) {
  const { id } = props;
  return (
    <section>
      <div id="nizza-player"></div>

      <script type="text/partytown"
        id="nizza-player-script"
        src={`https://cdn.nizza.com/player/prod/nz-index.es.js?id=${id}&account=${ACCOUNT}&originOfProducts=faststore`}>
      </script>
    </section>
  )
}