<script>
    import { get, EVENT_TYPES } from '../services/data'
    import {Card} from '../components/'
    export let id;
    let products = []
    get(EVENT_TYPES.ON, `compras/${id}/products`, data => products = data)
</script>

<div>
    {#each products as {key, value}, i}
        <Card cardStyle="outlined"> {value.name}</Card>
    {/each}
</div>