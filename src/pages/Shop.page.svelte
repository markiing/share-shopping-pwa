<script>
    import { get, EVENT_TYPES } from '../services/data'
    import {headerText} from '../store'
    import {Card} from '../components/'
    export let id;
    let products = []
    get(EVENT_TYPES.ON, `compras/${id}/products`, data => products = data)
    headerText.update(() => "Mercearia")
</script>

<div>
    {#each products as {value}}
        <Card cardStyle="outlined">
            {value.name} - {value.price} - {value.quantity} = {value.price * value.quantity}
        </Card>
    {/each}
</div>