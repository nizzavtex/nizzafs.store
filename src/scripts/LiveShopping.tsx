export interface LiveShoppingScriptProps {
    id: string
    account: string
}
  

const LiveShoppingScript = (props: LiveShoppingScriptProps) => {
    const { id, account } = props;
    return (
        <script type="module"
            id="nizza-player-script"
            src={`https://cdn.nizza.com/player/prod/nz-index.es.js?id=${id}&account=${account}&originOfProducts=faststore`}>
        </script>
    )
}

export default LiveShoppingScript